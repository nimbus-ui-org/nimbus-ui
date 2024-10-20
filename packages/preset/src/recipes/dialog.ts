import { defineRecipe } from '@pandacss/dev'

export const dialog = defineRecipe({
  className: 'nimbus-dialog',
  jsx: ['Dialog', 'Popover', 'Modal'],
  base: {
    padding: '4',
    outline: 'none',
    borderRadius: 'default',
    borderWidth: 'xs',
    borderColor: 'base.border',
    boxShadow: 'overlay',
    bgColor: 'base.bg.body',
    maxWidth: '100%'
  },
  variants: {
    size: {
      xs: {
        width: '96'
      },
      sm: {
        width: 'md'
      },
      md: {
        width: 'lg'
      },
      lg: {
        width: 'xl'
      },
      xl: {
        width: '2xl'
      },
      auto: {
        width: 'auto'
      }
    }
  }
})
