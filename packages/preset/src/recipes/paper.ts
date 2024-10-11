import { defineRecipe } from '@pandacss/dev'

export const paper = defineRecipe({
  className: 'nimbus-paper',
  jsx: ['Paper'],
  base: {
    borderColor: 'base.border',
    borderRadius: 'default'
  },
  variants: {
    variant: {
      raised: {
        bgColor: 'base.bg.2',
        shadow: 'base.md'
      },
      outline: {
        bgColor: 'base.bg.1',
        borderWidth: 'xs'
      },
      blurred: {
        bgColor: 'base.bg.2',
        backdropFilter: 'auto',
        backdropBlur: 'lg',
        borderWidth: 'xs'
      }
    }
  },
  defaultVariants: { variant: 'raised' }
})
