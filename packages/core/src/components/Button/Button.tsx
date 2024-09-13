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
          color: 'colorPalette.ghost.text',
          colorPalette: 'primary',
          bg: 'colorPalette.ghost',
          borderRadius: 'default',
          textStyle: 'h3',
          transition: 'colors',
          _hovered: {
            bg: 'colorPalette.ghost.hover'
          },
          _pressed: {
            bg: 'colorPalette.ghost.active'
          },
          outline: 'none',
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
