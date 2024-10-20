import { forwardRef } from 'react'
import {
  button,
  iconButton,
  type ButtonVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { cx } from '@nimbus-ui/styled-system/css'
import { ButtonContext, useContextProps } from 'react-aria-components'
import { ButtonBase, type ButtonBaseProps } from '@components/ButtonBase'

export type IconButtonProps = ButtonBaseProps & ButtonVariantProps

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>) => {
    ;[props, ref] = useContextProps(
      props,
      ref as React.Ref<HTMLButtonElement>,
      ButtonContext
    )

    const { children, className, size, variant, isDisabled, ...otherProps } = props

    // recipe variants are more specific than slot recipe variants
    // so we can override with icon button styles
    const buttonClasses = button({ variant })
    const iconButtonStyles = iconButton({ size })

    return (
      <ButtonBase
        className={cx(buttonClasses.root, iconButtonStyles, className)}
        data-appearance-disabled={isDisabled || undefined}
        isDisabled={isDisabled || undefined}
        ref={ref}
        {...otherProps}
      >
        {children}
      </ButtonBase>
    )
  }
)

IconButton.displayName = 'NimbusUI_IconButton'
