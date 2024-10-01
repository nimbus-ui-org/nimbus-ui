import { forwardRef } from 'react'
import { iconButton, toggleButton } from '@nimbus-ui/styled-system/recipes'
import type { AriaProps } from '@utils'
import {
  ToggleButton as AriaToggleButton,
  ToggleButtonContext,
  useContextProps
} from 'react-aria-components'
import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { cx } from '@nimbus-ui/styled-system/css'

interface Props {
  /**
   * Value of the toggle button.
   * Also used to determine the selected value among other `ToggleButton`s under a `ToggleButtonProvider`.
   */
  value?: string

  /**
   * Handler that is called when the element's selection state changes.
   */
  onChange?: ((isSelected: boolean, value?: string) => void) | undefined
}

const StyledToggleIconButton = styled(AriaToggleButton, toggleButton)

type StyledToggleIconButtonProps = ComponentProps<typeof StyledToggleIconButton>

export type ToggleIconButtonProps = AriaProps<
  Omit<StyledToggleIconButtonProps, 'onChange'>
> &
  Props

export const ToggleIconButton = forwardRef(
  (props: ToggleIconButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    ;[props, ref] = useContextProps(props, ref, ToggleButtonContext)

    const {
      children,
      className,
      variant,
      size,
      isDisabled,
      value,
      selectedValue,
      isSelected,
      onChange,
      ...otherProps
    } = props as ToggleIconButtonProps & { selectedValue?: string }

    // recipe variants are more specific than slot recipe variants
    // so we can override with icon button styles
    const toggleButtonClasses = toggleButton({ variant })
    const iconButtonStyles = iconButton({ size })

    return (
      <StyledToggleIconButton
        className={cx(toggleButtonClasses.root, iconButtonStyles, className)}
        data-appearance-disabled={isDisabled || undefined}
        isDisabled={isDisabled || undefined}
        data-value={value}
        isSelected={
          selectedValue || selectedValue === null
            ? value === selectedValue // if controlled
            : isSelected // if uncontrolled
        }
        onChange={(state) => onChange && onChange(state, value)}
        ref={ref}
        {...otherProps}
      >
        {children}
      </StyledToggleIconButton>
    )
  }
)

ToggleIconButton.displayName = 'NimbusUI_ToggleButton'
