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
  const isFirstRender = useFirstRenderState()

  const isSSR = useIsSSR()
  const useIsomorphicLayoutEffect = useMemo(
    () => (isSSR ? useEffect : useLayoutEffect),
    [isSSR]
  )

  const [transitionStatus, setStatus] = useState<TransitionStatus>(
    mounted ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete
  )

  const onStartHandler = useMemo(
    () => (mounted ? onEnter : onExit),
    [mounted, onEnter, onExit]
  )

  const onCompleteHandler = useMemo(
    () => (mounted ? onEnterComplete : onExitComplete),
    [mounted, onEnterComplete, onExitComplete]
  )

  const newTransitionDuration = useMemo(
    () => (mounted ? duration : exitDuration),
    [duration, exitDuration, mounted]
  )

  const delay = useMemo(
    () => (mounted ? enterDelay : exitDelay),
    [enterDelay, exitDelay, mounted]
  )

  const transitionTimeoutRef = useRef<number>(-1)
  const delayTimeoutRef = useRef<number>(-1)
  const rafRef = useRef(-1)

  const handleStateChange = useCallback(() => {
    window.clearTimeout(transitionTimeoutRef.current)

    if (newTransitionDuration === 0) {
      if (onStartHandler) onStartHandler()
      if (onCompleteHandler) onCompleteHandler()
      setStatus(mounted ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete)
    } else {
      // setting status within same frame disrupts animation if transition property is being set dynamically
      rafRef.current = requestAnimationFrame(() => {
        if (onStartHandler) onStartHandler()
        setStatus(mounted ? TransitionStatus.Entering : TransitionStatus.Exiting)

        transitionTimeoutRef.current = window.setTimeout(() => {
          if (onCompleteHandler) onCompleteHandler()
          setStatus(
            mounted ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete
          )
        }, newTransitionDuration)
      })
    }
  }, [mounted, newTransitionDuration, onCompleteHandler, onStartHandler])

  const handleTransitionWithDelay = useCallback(() => {
    window.clearTimeout(delayTimeoutRef.current)

    if (typeof delay !== 'number') {
      handleStateChange()
      return
    }

    delayTimeoutRef.current = window.setTimeout(() => {
      handleStateChange()
    }, delay)
  }, [delay, handleStateChange])

  useIsomorphicLayoutEffect(() => {
    if (!isFirstRender) handleTransitionWithDelay()
  }, [mounted])

  useEffect(
    () => () => {
      window.clearTimeout(transitionTimeoutRef.current)
      cancelAnimationFrame(rafRef.current)
    },
    []
  )

  const transitionDuration = useMemo(() => {
    if (
      transitionStatus === TransitionStatus.Entering ||
      transitionStatus === TransitionStatus.Exiting
    ) {
      return `${newTransitionDuration}ms`
    }

    return undefined
  }, [newTransitionDuration, transitionStatus])

  return { transitionDuration, transitionStatus }
}
