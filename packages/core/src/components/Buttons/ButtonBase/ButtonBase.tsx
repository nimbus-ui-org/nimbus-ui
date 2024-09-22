import { Button as AriaButton, Link as AriaLink } from 'react-aria-components'
import type {
  ButtonProps as AriaButtonProps,
  LinkProps as AriaLinkProps
} from 'react-aria-components'
import { forwardRef, type ElementType } from 'react'
import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import type { AriaProps } from '@utils'

type UnstyledButtonBaseProps = AriaProps<AriaLinkProps & AriaButtonProps>

const UnstyledButtonBase = forwardRef(
  (
    { children, ...props }: UnstyledButtonBaseProps,
    ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    // if href is provided render a Link instead
    const Component: ElementType = props.href ? AriaLink : AriaButton

    return (
      <Component role={!props.href && 'button'} ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)

UnstyledButtonBase.displayName = 'NimbusUI_ButtonBase'

export const ButtonBase = styled(UnstyledButtonBase)
export type ButtonBaseProps = ComponentProps<typeof ButtonBase>
