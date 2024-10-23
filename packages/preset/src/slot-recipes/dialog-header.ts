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
      paddingBlockEnd: '4'
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
      marginBlockStart: '-2.5',
      marginInlineEnd: '-2.5',
      colorPalette: 'base'
    },
    separator: {
      paddingBlockEnd: '4'
    }
  }
})
