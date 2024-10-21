import { defineRecipe } from '@pandacss/dev'

export const separator = defineRecipe({
  className: 'nimbus-separator',
  jsx: ['Separator'],
  base: {
    alignSelf: 'stretch',
    borderColor: 'base.border'
  },
  variants: {
    size: {
      xs: {
        borderTopWidth: 'xs',
        borderInlineStartWidth: 'xs'
      },
      sm: {
        borderTopWidth: 'sm',
        borderInlineStartWidth: 'sm'
      },
      md: {
        borderTopWidth: 'md',
        borderInlineStartWidth: 'md'
      },
      lg: {
        borderTopWidth: 'lg',
        borderInlineStartWidth: 'lg'
      },
      xl: {
        borderTopWidth: 'xl',
        borderInlineStartWidth: 'xl'
      }
    }
  },
  defaultVariants: { size: 'xs' }
})
