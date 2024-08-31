import { ButtonBase, type ButtonBasePropsWithRef } from '@components/ButtonBase'
import { forwardRef } from 'react'

interface Props {
  color?: 'white' | 'black'
}

type ButtonProps = ButtonBasePropsWithRef & Props

// all components that rely on ButtonBaseProps need to have explicit type definitions.
// check ButtonBase implementation for more details.
export const Button: React.FC<ButtonProps> = forwardRef(
  ({ children, ...props }: ButtonProps, ref) => {
    return (
      <ButtonBase ref={ref} {...props}>
        {children as React.ReactNode}
      </ButtonBase>
    )
  }
)

Button.displayName = 'NimbusUI_Button'
