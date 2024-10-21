import { forwardRef } from 'react'
import {
  button,
  iconButton,
  type ButtonVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { cx } from '@nimbus-ui/styled-system/css'
import { ButtonContext, useContextProps, type LinkProps } from 'react-aria-components'
import { ButtonBase, type ButtonBaseProps } from '@components/ButtonBase'
import { Loader } from '@components/Loader'
import { renderChildren } from '@utils'

interface Props {
  /**
   * If `true`, switches to a loading state and renders a `Loader`.
   */
  isLoading?: boolean

  /**
   * Element rendered instead of the `Loader` component when `isLoading` is `true`.
   */
  customLoader?: LinkProps['children']
}

export type IconButtonProps = ButtonBaseProps & ButtonVariantProps & Props

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>) => {
    ;[props, ref] = useContextProps(
      props,
      ref as React.Ref<HTMLButtonElement>,
      ButtonContext
    )

    const {
      children,
      className,
      size,
      variant,
      isDisabled,
      isLoading,
      customLoader,
      ...otherProps
    } = props

    // recipe variants are more specific than slot recipe variants
    // so we can override with icon button styles
    const buttonClasses = button({ variant })
    const iconButtonStyles = iconButton({ size })

    return (
      <ButtonBase
        className={cx(buttonClasses.root, iconButtonStyles, className)}
        data-loading={isLoading || undefined}
        data-appearance-disabled={isDisabled || undefined}
        isDisabled={isLoading || isDisabled || undefined}
        ref={ref}
        {...otherProps}
      >
        {(renderProps) => (
          <>
            {isLoading ? (
              <span data-loading>
                {renderChildren(customLoader, renderProps) ?? <Loader />}
              </span>
            ) : (
              renderChildren(children, renderProps)
            )}
          </>
        )}
      </ButtonBase>
    )
  }
)

IconButton.displayName = 'NimbusUI_IconButton'
