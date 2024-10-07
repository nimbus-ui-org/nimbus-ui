import { useFirstRenderState } from '@nimbus-ui/hooks'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useIsSSR } from 'react-aria'

export enum TransitionStatus {
  Entering = 'ENTERING',
  EnterComplete = 'ENTER_COMPLETE',
  Exiting = 'EXITING',
  ExitComplete = 'EXIT_COMPLETE'
}

interface UseTransition {
  duration: number
  exitDuration: number
  mounted: boolean
  onEnter?: () => void
  onExit?: () => void
  onEnterComplete?: () => void
  onExitComplete?: () => void
  enterDelay?: number
  exitDelay?: number
}

export const useTransition = ({
  duration,
  exitDuration,
  mounted,
  onEnter,
  onEnterComplete,
  onExit,
  onExitComplete,
  enterDelay,
  exitDelay
}: UseTransition) => {
  const [transitionStatus, setStatus] = useState<TransitionStatus>(
    mounted ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete
  )
  const transitionTimeoutRef = useRef<number>(-1)
  const delayTimeoutRef = useRef<number>(-1)
  const rafRef = useRef(-1)

  const isFirstRender = useFirstRenderState()

  const isSSR = useIsSSR()
  const useIsomorphicLayoutEffect = useMemo(
    () => (isSSR ? useEffect : useLayoutEffect),
    [isSSR]
  )

  const handleStateChange = useCallback(
    (shouldMount: boolean) => {
      const preHandler = shouldMount ? onEnter : onExit
      const handler = shouldMount ? onEnterComplete : onExitComplete

      window.clearTimeout(transitionTimeoutRef.current)

      const newTransitionDuration = shouldMount ? duration : exitDuration

      if (newTransitionDuration === 0) {
        if (preHandler) preHandler()
        if (handler) handler()
        setStatus(
          shouldMount ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete
        )
      } else {
        // setting status within same frame disrupts animation if transition property is being set dynamically
        rafRef.current = requestAnimationFrame(() => {
          if (preHandler) preHandler()
          setStatus(shouldMount ? TransitionStatus.Entering : TransitionStatus.Exiting)

          transitionTimeoutRef.current = window.setTimeout(() => {
            if (handler) handler()
            setStatus(
              shouldMount ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete
            )
          }, newTransitionDuration)
        })
      }
    },
    [duration, exitDuration, onEnter, onEnterComplete, onExit, onExitComplete]
  )

  const handleTransitionWithDelay = useCallback(
    (shouldMount: boolean) => {
      window.clearTimeout(delayTimeoutRef.current)
      const delay = shouldMount ? enterDelay : exitDelay

      if (typeof delay !== 'number') {
        handleStateChange(shouldMount)
        return
      }

      delayTimeoutRef.current = window.setTimeout(() => {
        handleStateChange(shouldMount)
      }, delay)
    },
    [enterDelay, exitDelay, handleStateChange]
  )

  useIsomorphicLayoutEffect(() => {
    if (!isFirstRender) handleTransitionWithDelay(mounted)
  }, [mounted])

  useEffect(
    () => () => {
      window.clearTimeout(transitionTimeoutRef.current)
      cancelAnimationFrame(rafRef.current)
    },
    []
  )

  const transitionDuration = useMemo(() => {
    if (transitionStatus === TransitionStatus.Entering) {
      return `${duration}ms`
    }

    if (transitionStatus === TransitionStatus.Exiting) {
      return `${exitDuration}ms`
    }

    return undefined
  }, [transitionStatus, duration, exitDuration])

  return {
    transitionDuration,
    transitionStatus
  }
}
