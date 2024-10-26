import { defineRecipe } from '@pandacss/dev'

export const dialog = defineRecipe({
  className: 'nimbus-dialog',
  jsx: ['Dialog', 'Popover', 'Modal', 'Drawer'],
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: 'var(--dialog-gutter, 1rem)',
    outline: 'none',
    maxWidth: '100%',
    overflow: 'auto',
    '& [data-section="content"]': {
      flex: '1 1 0%'
    },
    '& [data-section="footer"]': {
      paddingBlockStart: 'var(--dialog-gutter, 1rem)',
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
          padding: 'var(--dialog-gutter, 1rem)',
          borderBottomWidth: 'xs',
          borderColor: 'base.border'
        },
        '& [data-section="footer"]': {
          padding: 'var(--dialog-gutter, 1rem)',
          borderTopWidth: 'xs',
          borderColor: 'base.border'
        },
        '& [data-section="content"]': {
          padding: 'var(--dialog-gutter, 1rem)',
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
