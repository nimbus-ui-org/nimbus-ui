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
        _orientationHorizontal: {
          borderTopWidth: 'xs'
        },
        _orientationVertical: {
          borderInlineStartWidth: 'xs'
        }
      },
      sm: {
        _orientationHorizontal: {
          borderTopWidth: 'sm'
        },
        _orientationVertical: {
          borderInlineStartWidth: 'sm'
        }
      },
      md: {
        _orientationHorizontal: {
          borderTopWidth: 'md'
        },
        _orientationVertical: {
          borderInlineStartWidth: 'md'
        }
      },
      lg: {
        _orientationHorizontal: {
          borderTopWidth: 'lg'
        },
        _orientationVertical: {
          borderInlineStartWidth: 'lg'
        }
      },
      xl: {
        _orientationHorizontal: {
          borderTopWidth: 'xl'
        },
        _orientationVertical: {
          borderInlineStartWidth: 'xl'
        }
      }
    }
  },
  defaultVariants: { size: 'xs' }
})
