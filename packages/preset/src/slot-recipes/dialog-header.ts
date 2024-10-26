import { defineSlotRecipe } from '@pandacss/dev'

export const dialogHeader = defineSlotRecipe({
  className: 'nimbus-dialog-header',
  slots: ['root', 'heading', 'title', 'icon', 'close', 'separator'],
  jsx: ['DialogHeader'],
  base: {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBlockEnd: 'var(--dialog-gutter, 1rem)'
    },
    heading: {
      display: 'flex',
      alignItems: 'flex-start',
      marginInlineEnd: '3'
    },
    icon: {
      fontSize: '2xl',
      marginInlineEnd: '3'
    },
    title: {
      textStyle: 'h4',
      lineHeight: '1.2'
    },
    close: {
      alignSelf: 'start',
      marginBlockStart: 'calc(var(--dialog-gutter, 1rem) / 1.6 * -1)',
      marginInlineEnd: 'calc(var(--dialog-gutter, 1rem) / 1.6 * -1)',
      colorPalette: 'base'
    },
    separator: {
      paddingBlockEnd: 'var(--dialog-gutter, 1rem)'
    }
  }
})
