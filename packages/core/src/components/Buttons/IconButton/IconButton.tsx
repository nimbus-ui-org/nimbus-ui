import { forwardRef } from 'react'
import { ButtonBase, type ButtonBaseProps } from '../ButtonBase'
import {
  button,
  iconButton,
  type ButtonVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { cx } from '@nimbus-ui/styled-system/css'

export type IconButtonProps = ButtonBaseProps & ButtonVariantProps

export const IconButton = forwardRef(
  (
    { children, className, size, variant, isDisabled, ...props }: IconButtonProps,
    ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    // recipe variants take precedence over slot recipe variants
    const buttonClasses = button({ variant })
    const iconButtonStyles = iconButton({ size })

    return (
      <ButtonBase
        className={cx(buttonClasses.root, iconButtonStyles, className)}
        data-appearance-disabled={isDisabled || undefined}
        isDisabled={isDisabled || undefined}
        ref={ref}
        {...props}
      >
        {children as React.ReactNode}
      </ButtonBase>
    )
  }
)

IconButton.displayName = 'NimbusUI_IconButton'
