/**
 * This component was inspired by Mantine ❤️
 */

import { styled } from '@nimbus-ui/styled-system/jsx'
import { transition } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import React, { forwardRef } from 'react'
import { TransitionStatus, useTransition } from './use-transition'

interface Props {
  /**
   * Controls the mounted state of the component. Shows the component if `true`.
   */
  in: boolean

  /**
   * Transition duration **(ms)**.
   * @default 300
   */
  duration?: number

  /**
   * Exit transition duration **(ms)**.
   * @default 300
   */
  exitDuration?: number

  /**
   * Enter transition delay **(ms)**.
   */
  enterDelay?: number

  /**
   * Exit transition delay **(ms)**.
   */
  exitDelay?: number

  /**
   * Keeps the element mounted to the DOM after exit transition ends,
   * and applies `data-hidden` attribute styles.
   * @default false
   */
  keepMounted?: boolean

  /**
   * Called when enter transition starts.
   */
  onEnter?: () => void

  /**
   * Called when enter transition completes.
   */
  onEnterComplete?: () => void

  /**
   * Called when exit transition starts.
   */
  onExit?: () => void

  /**
   * Called when exit transition completes.
   */
  onExitComplete?: () => void
}

const StyledTransition = styled('div', transition)
export type TransitionProps = ComponentProps<typeof StyledTransition> & Props

export const Transition = forwardRef(
  (
    {
      in: mounted,
      keepMounted,
      duration = 300,
      exitDuration = duration,
      enterDelay,
      exitDelay,
      onEnter,
      onEnterComplete,
      onExit,
      onExitComplete,
      children,
      ...props
    }: TransitionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { transitionDuration, transitionStatus } = useTransition({
      mounted,
      duration,
      exitDuration,
      enterDelay,
      exitDelay,
      onEnter,
      onEnterComplete,
      onExit,
      onExitComplete
    })

    const isEntering = transitionStatus === TransitionStatus.Entering
    const isEnterComplete = transitionStatus === TransitionStatus.EnterComplete
    const isExiting = transitionStatus === TransitionStatus.Exiting
    const isExitComplete = transitionStatus === TransitionStatus.ExitComplete
    const isHidden = (!mounted && isExitComplete) || undefined

    if (isHidden && !keepMounted) return null

    return (
      <StyledTransition
        data-in={isEntering || isEnterComplete || undefined}
        data-out={isExiting || isExitComplete || undefined}
        data-hidden={isHidden}
        aria-hidden={isHidden}
        style={{ transitionDuration }}
        ref={ref}
        {...props}
      >
        {children}
      </StyledTransition>
    )
  }
)

Transition.displayName = 'NimbusUI_Transition'
