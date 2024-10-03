import { forwardRef } from 'react'
import {
  toggleButton,
  type ToggleButtonRecipe,
  type ToggleButtonVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { renderChildren, useStyles, type AriaProps, type SlotsClasses } from '@utils'
import {
  ToggleButton as AriaToggleButton,
  ToggleButtonContext,
  useContextProps,
  type ToggleButtonProps as AriaToggleButtonProps
} from 'react-aria-components'
import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<ToggleButtonRecipe>

  /**
   * Element rendered before the children.
   */
  startSection?: AriaToggleButtonProps['children']

  /**
   * Element rendered after the children.
   */
  endSection?: AriaToggleButtonProps['children']

  /**
   * Value of the toggle button.
   * Also used to determine the selected value among other `ToggleButton` components under a `ToggleButtonProvider`.
   */
  value?: string

  /**
   * Handler that is called when the element's selection state changes.
   */
  onChange?: ((isSelected: boolean, value?: string | null) => void) | undefined
}

const StyledToggleButton = styled(AriaToggleButton, toggleButton)

type StyledToggleButtonProps = ComponentProps<typeof StyledToggleButton>

export type ToggleButtonProps = AriaProps<Omit<StyledToggleButtonProps, 'onChange'>> &
  Props

export const ToggleButton = forwardRef(
  (props: ToggleButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    ;[props, ref] = useContextProps(props, ref, ToggleButtonContext)

    const {
      children,
      className,
      classNames,
      startSection,
      endSection,
      isDisabled,
      value,
      selectedValue,
      isSelected,
      onChange,
      ...otherProps
    } = props as ToggleButtonProps & { selectedValue?: string }

    const { styles, rest } = useStyles<
      typeof otherProps,
      ToggleButtonVariantProps,
      ToggleButtonRecipe
    >({
      recipe: toggleButton,
      props: otherProps,
      className,
      classNames
    })

    return (
      <StyledToggleButton
        className={styles.root}
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
        {...rest}
      >
        {(renderProps) => (
          <>
            {renderChildren(startSection, renderProps) && (
              <span className={styles.section} data-section="start">
                {renderChildren(startSection, renderProps)}
              </span>
            )}

            <span className={styles.label}>{renderChildren(children, renderProps)}</span>

            {renderChildren(endSection, renderProps) && (
              <span className={styles.section} data-section="end">
                {renderChildren(endSection, renderProps)}
              </span>
            )}
          </>
        )}
      </StyledToggleButton>
    )
  }
)

ToggleButton.displayName = 'NimbusUI_ToggleButton'
