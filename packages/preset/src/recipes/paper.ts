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
        bgColor: 'base.bg.paper',
        shadow: 'base.md'
      },
      outline: {
        bgColor: 'base.bg.body',
        borderWidth: 'xs'
      },
      blurred: {
        bgColor: 'base.bg.paper.alpha',
        backdropFilter: 'auto',
        backdropBlur: 'lg',
        borderWidth: 'xs'
      }
    }
  },
  defaultVariants: { variant: 'raised' }
})
