import { defineRecipe } from '@pandacss/dev'
import { rem } from '@utils'

export const dialog = defineRecipe({
  className: 'nimbus-dialog',
  jsx: ['Dialog', 'Popover', 'Modal', 'Drawer'],
  base: {
    '--dialog-padding': rem(16),
    display: 'flex',
    flexDirection: 'column',
    padding: 'var(--dialog-padding)',
    outline: 'none',
    maxWidth: '100%',
    overflow: 'auto',
    '& [data-section="content"]': {
      flex: '1 1 0%'
    },
    '& [data-section="footer"]': {
      paddingBlockStart: 'var(--dialog-padding)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '2'
    }
  },
  variants: {
    scrollType: {
      inner: {
        padding: '0',
        '& [data-section="header"]': {
          padding: 'var(--dialog-padding)',
          borderBottomWidth: 'xs',
          borderColor: 'base.border'
        },
        '& [data-section="footer"]': {
          padding: 'var(--dialog-padding)',
          borderTopWidth: 'xs',
          borderColor: 'base.border'
        },
        '& [data-section="content"]': {
          padding: 'var(--dialog-padding)',
          overflowY: 'auto'
        },
        '& [data-separator]': {
          display: 'none'
        }
      },
      outer: {}
    }
  }
})
