import {
  ToggleButtonContext,
  type ToggleButtonProps as AriaToggleButtonProps
} from 'react-aria-components'
import { forwardRef } from 'react'
import { styled } from '@nimbus-ui/styled-system/jsx'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import type { ToggleButtonProps } from '@components/ToggleButton'

type Props = {
  /**
   * If `true`, `ToggleButton` and `ToggleIconButton` components in the group will be attached.
   */
  isAttached?: boolean

  /**
   * Determines which `ToggleButton` or `ToggleIconButton` is currently selected
   */
  selectedValue?: string | null

  /**
   * If `true`, disables `ToggleButton` and `ToggleIconButton` components in the group.
   */
  isDisabled?: boolean

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
    {
      children,
      isAttached,
      onChange,
      selectedValue,
      orientation = 'horizontal',
      isDisabled,
      ...props
    }: ToggleButtonGroupProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <ToggleButtonContext.Provider
        value={{ selectedValue, onChange, isDisabled } as AriaToggleButtonProps}
      >
        <StyledToggleButtonGroup
          data-attached={isAttached || undefined}
          data-orientation={orientation}
          orientation={orientation}
          role="group"
          {...props}
          ref={ref}
        >
          {children}
        </StyledToggleButtonGroup>
      </ToggleButtonContext.Provider>
    )
  }
)

ToggleButtonGroup.displayName = 'NimbusUI_ToggleButtonGroup'
