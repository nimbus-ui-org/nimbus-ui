import { defineRecipe } from '@pandacss/dev'

// The purpose of the this recipe is to override the button slot recipe
// The IconButton component still uses the button slot recipe styles

export const iconButton = defineRecipe({
  className: 'nimbus-icon-button',
  jsx: ['IconButton', 'ToggleIconButton'],
  variants: {
    size: {
      xs: {
        fontSize: 'sm',
        height: '6',
        minWidth: '6',
        px: '0',
        _loading: {
          '& > span': {
            height: '3.5'
          }
        }
      },
      sm: {
        fontSize: 'lg',
        height: '8',
        minWidth: '8',
        px: '0',
        _loading: {
          '& > span': {
            height: '5'
          }
        }
      },
      md: {
        fontSize: 'xl',
        height: '10',
        minWidth: '10',
        px: '0',
        _loading: {
          '& > span': {
            height: '6'
          }
        }
      },
      lg: {
        fontSize: '2xl',
        height: '12',
        minWidth: '12',
        px: '0',
        _loading: {
          '& > span': {
            height: '7'
          }
        }
      },
      xl: {
        fontSize: '3xl',
        height: '14',
        minWidth: '14',
        px: '0',
        _loading: {
          '& > span': {
            height: '9'
          }
        }
      }
    }
  },
  defaultVariants: { size: 'md' }
})
