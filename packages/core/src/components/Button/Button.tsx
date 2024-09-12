import { ButtonBase, type ButtonBasePropsWithRef } from '@components/ButtonBase'
import { forwardRef } from 'react'
import { css } from '@nimbus-ui/styled-system/css'

interface Props {
  color?: 'white' | 'black'
}

type ButtonProps = ButtonBasePropsWithRef & Props

// all components that rely on ButtonBaseProps need to have explicit type definitions.
// check ButtonBase implementation for more details.
export const Button: React.FC<ButtonProps> = forwardRef(
  ({ children, ...props }: ButtonProps, ref) => {
    return (
      <ButtonBase
        className={css({
          color: 'black',
          bg: { base: 'primary.hover', _dark: 'primary.hover' },
          borderRadius: 'default',
          colorPalette: 'primary',
          textStyle: 'h1',
          transition: 'colors',
          _hover: {
            background: 'black'
          },
          reducedMotion: 'preference',
          cursorType: 'preference'
        })}
        ref={ref}
        {...props}
      >
        {children as React.ReactNode}
      </ButtonBase>
    )
  }
)

Button.displayName = 'NimbusUI_Button'
