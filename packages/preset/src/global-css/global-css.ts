import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    bgColor: 'base.bg.1',
    color: 'base.text.1',
    fontFamily: 'body'
  }
})
