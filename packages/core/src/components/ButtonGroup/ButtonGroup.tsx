import { forwardRef } from 'react'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { ButtonContext, type ButtonProps } from 'react-aria-components'

interface Props {
  /**
   * If `true`, `Button` and `IconButton` components in the group will be attached.
   */
  isAttached?: boolean

  /**
   * If `true`, disables `Button` and `IconButton` components in the group.
   */
  isDisabled?: boolean

  /**
   * If `true`, switches `Button` and `IconButton` components in the group to a loading state.
   */
  isLoading?: boolean
}

const StyledButtonGroup = styled('div', buttonGroup)
export type ButtonGroupProps = ComponentProps<typeof StyledButtonGroup> & Props

export const ButtonGroup = forwardRef(
  (
    {
      isAttached,
      orientation = 'horizontal',
      isDisabled,
      isLoading,
      ...props
    }: ButtonGroupProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <ButtonContext.Provider value={{ isDisabled, isLoading } as ButtonProps}>
        <StyledButtonGroup
          data-attached={isAttached || undefined}
          data-orientation={orientation}
          orientation={orientation}
          role="group"
          {...props}
          ref={ref}
        />
      </ButtonContext.Provider>
    )
  }
)

ButtonGroup.displayName = 'NimbusUI_ButtonGroup'
