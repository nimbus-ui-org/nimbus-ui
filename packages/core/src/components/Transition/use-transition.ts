import { useAnimationFrame, useTimeout, useUpdateEffect } from '@nimbus-ui/hooks'
import { useCallback, useMemo, useState } from 'react'

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

  const [startTransitionTimeout] = useTimeout(
    () => {
      if (onCompleteHandler) onCompleteHandler()
      setStatus(mounted ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete)
    },
    newTransitionDuration,
    false,
    [mounted, newTransitionDuration, onCompleteHandler]
  )

  const [startTransition] = useAnimationFrame(
    ({ complete }) => {
      if (onStartHandler) onStartHandler()
      setStatus(mounted ? TransitionStatus.Entering : TransitionStatus.Exiting)

      startTransitionTimeout()

      complete()
    },
    false,
    [onStartHandler, mounted, startTransitionTimeout]
  )

  const handleStateChange = useCallback(() => {
    if (newTransitionDuration === 0) {
      if (onStartHandler) onStartHandler()
      if (onCompleteHandler) onCompleteHandler()
      setStatus(mounted ? TransitionStatus.EnterComplete : TransitionStatus.ExitComplete)
    } else {
      // setting the state in the same frame disrupts animation
      startTransition()
    }
  }, [mounted, newTransitionDuration, onCompleteHandler, onStartHandler, startTransition])

  const [startDelayTimeout] = useTimeout(
    () => {
      handleStateChange()
    },
    delay as number,
    false,
    [delay, handleStateChange]
  )

  const handleTransitionWithDelay = useCallback(() => {
    if (typeof delay !== 'number') {
      handleStateChange()
      return
    }

    startDelayTimeout()
  }, [delay, handleStateChange, startDelayTimeout])

  useUpdateEffect(() => {
    handleTransitionWithDelay()
  }, [mounted])

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
