import {
  ToggleButtonContext as AriaToggleButtonContext,
  type ToggleButtonProps as AriaToggleButtonProps
} from 'react-aria-components'
import { forwardRef } from 'react'
import { styled } from '@nimbus-ui/styled-system/jsx'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import type { ToggleButtonProps } from '../ToggleButton/ToggleButton'

type Props = {
  /**
   * If `true` `Button` and `IconButton` in the group components will be attached.
   */
  isAttached?: boolean

  /**
   * Determines which ToggleButton is currently selected
   */
  selectedValue?: string | null

  onChange?: ToggleButtonProps['onChange']
}

const StyledToggleButtonGroup = styled('div', buttonGroup)
export type ToggleButtonGroupProps = Omit<
  ComponentProps<typeof StyledToggleButtonGroup>,
  'onChange'
> &
  Props

export const ToggleButtonGroup = forwardRef(
  (
    { children, isAttached, onChange, selectedValue, ...props }: ToggleButtonGroupProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <AriaToggleButtonContext.Provider
        value={
          {
            selectedValue,
            onChange: onChange as (isSelected: boolean) => void
          } as AriaToggleButtonProps
        }
      >
        <StyledToggleButtonGroup
          data-attached={isAttached || undefined}
          role="group"
          {...props}
          ref={ref}
        >
          {children}
        </StyledToggleButtonGroup>
      </AriaToggleButtonContext.Provider>
    )
  }
)

ToggleButtonGroup.displayName = 'NimbusUI_ToggleButtonGroup'
