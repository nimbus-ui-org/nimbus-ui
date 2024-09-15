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
      bg: 'base.bg.1',
      color: 'base.text.1'
    }
  })
}
