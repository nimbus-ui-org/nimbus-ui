import { defineRecipe } from '@pandacss/dev'

export const dialog = defineRecipe({
  className: 'nimbus-dialog',
  jsx: ['Dialog', 'Popover', 'Modal', 'Drawer'],
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4',
    outline: 'none',
    maxWidth: '100%',
    '& [data-section="content"]': {
      flex: '1 1 0%'
    },
    '& [data-section="footer"]': {
      paddingBlockStart: '4',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '2'
    }
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
    },
    scrollType: {
      inner: {
        '& [data-section="content"]': {
          overflowY: 'auto'
        }
      },
      outer: {}
    }
  }
})
