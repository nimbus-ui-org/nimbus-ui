import { forwardRef } from 'react'
import { ButtonBase, type ButtonBaseProps } from '../ButtonBase'
import { Loader, type LoaderProps } from '@components/Loader'
import {
  button,
  type ButtonRecipe,
  type ButtonVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { useStyles, type SlotsClasses } from '@utils'

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
  startSection?: React.ReactNode

  /**
   * Element rendered after the children.
   */
  endSection?: React.ReactNode

  /**
   * If `true`, switches to a loading state and renders a `Loader`.
   */
  isLoading?: boolean

  /**
   * Element rendered instead of the `Loader` component when `isLoading` is `true`.
   * If this prop is used, `loaderProps` will be ignored.
   */
  customLoader?: React.ReactNode

  /**
   * `Loader` element props.
   */
  loaderProps?: LoaderProps
}

export type ButtonProps = ButtonBaseProps & ButtonVariantProps & Props

export const Button = forwardRef(
  (
    {
      children,
      className,
      classNames,
      startSection,
      endSection,
      isLoading,
      isDisabled,
      customLoader,
      loaderProps = {},
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const { styles, rest } = useStyles<typeof props, ButtonVariantProps, ButtonRecipe>({
      recipe: button,
      props,
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
        {startSection && (
          <span className={styles.section} data-section="start">
            {startSection}
          </span>
        )}

        {isLoading &&
          (customLoader ? (
            <span data-loading className={styles.loader}>
              {customLoader}
            </span>
          ) : (
            <Loader data-loading className={styles.loader} {...loaderProps} />
          ))}

        <span className={styles.label}>{children as React.ReactNode}</span>

        {endSection && (
          <span className={styles.section} data-section="end">
            {endSection}
          </span>
        )}
      </ButtonBase>
    )
  }
)

Button.displayName = 'NimbusUI_Button'
