import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    color: 'base.text.1',
    bg: 'color-mix(in srgb, {colors.base.1.light}, #fff 60%)',
    _dark: {
      bg: 'base.1.dark'
    }
  }
})
