import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    bgColor: 'base.bg.body',
    color: 'base.text.highContrast',
    fontFamily: 'body'
  },
  'h1, h2, h3, h4, h5, h6': {
    textWrap: 'wrap'
  }
})
