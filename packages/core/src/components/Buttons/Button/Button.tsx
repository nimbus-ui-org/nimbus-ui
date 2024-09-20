import { forwardRef } from 'react'
import { ButtonBase, type ButtonBaseProps } from '../ButtonBase'
import { Loader, type LoaderProps } from '@components/Loader'
import {
  button,
  type ButtonRecipe,
  type ButtonVariantProps
} from '@nimbus-ui/styled-system/recipes'
import type { SlotsClasses } from '@utils'
import { cx } from '@nimbus-ui/styled-system/css'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
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
      loaderProps,
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const [variants, rest] = button.splitVariantProps(props)

    const classes = button(variants)

    return (
      <ButtonBase
        className={cx(classes.root, classNames?.root, className)}
        data-loading={isLoading}
        ref={ref}
        {...rest}
      >
        {startSection && (
          <span className={cx(classes.section, classNames?.section)} data-section="start">
            {startSection}
          </span>
        )}

        {isLoading && (
          <Loader className={cx(classes.loader, classNames?.loader)} {...loaderProps} />
        )}

        <span className={cx(classes.label, classNames?.label)}>
          {children as React.ReactNode}
        </span>

        {endSection && (
          <span className={cx(classes.section, classNames?.section)} data-section="end">
            {endSection}
          </span>
        )}
      </ButtonBase>
    )
  }
)

Button.displayName = 'NimbusUI_Button'
