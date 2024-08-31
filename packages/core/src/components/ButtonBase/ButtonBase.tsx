import { Button as AriaButton, Link as AriaLink } from 'react-aria-components'
import type {
  ButtonProps as AriaButtonProps,
  LinkProps as AriaLinkProps
} from 'react-aria-components'
import { forwardRef, type ElementType } from 'react'

// conditional props based on the value of href
export type ButtonBaseProps =
  | ({ href?: never } & AriaButtonProps)
  | ({ href: string } & Omit<AriaLinkProps, 'href'>)

// normally ref type is added from forwardRef.
// this is an exception since we're preventing typescript inference by adding our type
// definitions due to typescript messing up ref types with conditional props
export type ButtonBasePropsWithRef = ButtonBaseProps & {
  ref?: React.LegacyRef<HTMLAnchorElement | HTMLButtonElement>
}

// add type definitions because letting typescript infer
// them when conditional props are used messes up ref types for some reason
export const ButtonBase: React.FC<ButtonBasePropsWithRef> = forwardRef(
  ({ children, ...props }: ButtonBaseProps, ref) => {
    // if href is provided render a Link instead
    const Component: ElementType = props.href ? AriaLink : AriaButton

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)

ButtonBase.displayName = 'NimbusUI_ButtonBase'
