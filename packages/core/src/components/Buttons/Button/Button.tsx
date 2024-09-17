import { forwardRef } from 'react'
import { UnstyledButtonBase, type UnstyledButtonBaseProps } from '../ButtonBase'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { styled } from '@nimbus-ui/styled-system/jsx'

interface Props {
  abbas?: 'white' | 'black'
}

type UnstyledButtonProps = UnstyledButtonBaseProps & Props

// const button = cva

const UnstyledButton = forwardRef(
  (
    { children, ...props }: UnstyledButtonProps,
    ref: React.LegacyRef<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    return (
      <UnstyledButtonBase ref={ref} {...props}>
        {children as React.ReactNode}
      </UnstyledButtonBase>
    )
  }
)

UnstyledButton.displayName = 'NimbusUI_Button'

export const Button = styled(UnstyledButton)
export type ButtonProps = ComponentProps<typeof Button>
