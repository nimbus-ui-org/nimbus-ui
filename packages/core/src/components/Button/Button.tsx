import { forwardRef } from 'react'
import { ButtonBase, type ButtonBaseProps } from '../ButtonBase'
import { Loader } from '@components/Loader'
import {
  button,
  type ButtonRecipe,
  type ButtonVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { renderChildren, useStyles, type SlotsClasses } from '@utils'
import {
  ButtonContext,
  useContextProps,
  type LinkProps as AriaLinkProps
} from 'react-aria-components'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<ButtonRecipe>

  /**
   * Element rendered before the children.
   */
  startSection?: AriaLinkProps['children']

  /**
   * Element rendered after the children.
   */
  endSection?: AriaLinkProps['children']

  /**
   * If `true`, switches to a loading state and renders a `Loader`.
   */
  isLoading?: boolean

  /**
   * Element rendered instead of the `Loader` component when `isLoading` is `true`.
   * If this prop is used, `loaderProps` will be ignored.
   */
  customLoader?: AriaLinkProps['children']
}

export type ButtonProps = ButtonBaseProps & ButtonVariantProps & Props

export const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>) => {
    ;[props, ref] = useContextProps(
      props,
      ref as React.Ref<HTMLButtonElement>,
      ButtonContext
    )

    const {
      children,
      className,
      classNames,
      startSection,
      endSection,
      isLoading,
      isDisabled,
      customLoader,
      ...otherProps
    } = props

    const { styles, rest } = useStyles<
      typeof otherProps,
      ButtonVariantProps,
      ButtonRecipe
    >({
      recipe: button,
      props: otherProps,
      className,
      classNames
    })

    return (
      <ButtonBase
        className={styles.root}
        data-loading={isLoading || undefined}
        data-appearance-disabled={isDisabled || undefined}
        isDisabled={isLoading || isDisabled || undefined}
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

            {isLoading && (
              <span data-loading className={styles.loader}>
                {renderChildren(customLoader, renderProps) ?? <Loader size="full" />}
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
      </ButtonBase>
    )
  }
)

Button.displayName = 'NimbusUI_Button'
