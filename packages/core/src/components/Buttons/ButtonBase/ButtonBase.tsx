import { Button as AriaButton, Link as AriaLink } from 'react-aria-components'
import type {
  ButtonProps as AriaButtonProps,
  LinkProps as AriaLinkProps
} from 'react-aria-components'
import { forwardRef, type ElementType } from 'react'
import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

export type UnstyledButtonBaseProps = Omit<
  AriaLinkProps & AriaButtonProps,
  'className'
> & {
  className?: string
}

export const UnstyledButtonBase = forwardRef(
  (
    { children, ...props }: UnstyledButtonBaseProps,
    ref: React.LegacyRef<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    // if href is provided render a Link instead
    const Component: ElementType = props.href ? AriaLink : AriaButton

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)

UnstyledButtonBase.displayName = 'NimbusUI_ButtonBase'

export const ButtonBase = styled(UnstyledButtonBase)
export type ButtonBaseProps = ComponentProps<typeof ButtonBase>
