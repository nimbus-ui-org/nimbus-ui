import { defineGlobalStyles } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'

export const getGlobalCss = (config: NimbusPresetConfig) => {
  const { cursor } = config

  return defineGlobalStyles({
    ':root': {
      '--cursor-type': cursor ?? 'pointer'
    },
    body: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      bg: { base: 'white', _dark: 'base.950' },
      color: { base: 'base.950', _dark: 'white' }
    }
  })
}
