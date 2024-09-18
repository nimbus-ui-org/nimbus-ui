import { forwardRef } from 'react'
import { ButtonBase, type ButtonBaseProps } from '../ButtonBase'

interface Props {
  abbas?: 'white' | 'black'
}

export type ButtonProps = ButtonBaseProps & Props

// const button = cva

export const Button = forwardRef(
  (
    { children, ...props }: ButtonProps,
    ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    return (
      <ButtonBase ref={ref} {...props}>
        {children as React.ReactNode}
      </ButtonBase>
    )
  }
)

Button.displayName = 'NimbusUI_Button'

// export const Button = styled(UnstyledButton)
// export type ButtonProps = ComponentProps<typeof Button>
