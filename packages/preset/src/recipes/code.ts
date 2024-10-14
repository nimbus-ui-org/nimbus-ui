import { defineRecipe } from '@pandacss/dev'

export const code = defineRecipe({
  className: 'nimbus-code',
  jsx: ['Code'],
  base: {
    fontFamily: 'mono',
    fontSize: '0.95em',
    borderRadius: 'sm',
    paddingInline: '0.2em',
    paddingBlock: '0.1em',
    colorPalette: 'primary'
  },
  variants: {
    variant: {
      solid: {
        bgColor: 'colorPalette.solid',
        color: 'colorPalette.solid.text'
      },
      outline: {
        borderWidth: 'xs',
        borderColor: 'colorPalette.outline.border',
        color: 'colorPalette.outline.text'
      },
      ghost: {
        bgColor: 'colorPalette.ghost',
        color: 'colorPalette.ghost.text'
      }
    }
  },
  defaultVariants: { variant: 'ghost' }
})
