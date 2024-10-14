import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    bgColor: 'base.bg.body',
    color: 'base.text.highContrast',
    fontFamily: 'body'
  }
})
