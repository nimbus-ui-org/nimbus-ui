import { defineGlobalStyles } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'

export const getGlobalCss = (config: NimbusPresetConfig) => {
  const { cursor } = config

  return {
    extend: defineGlobalStyles({
      ':root': {
        '--cursor-type': cursor ?? 'pointer'
      },
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        bg: { base: 'white', _dark: 'gray.900' },
        color: { base: 'gray.900', _dark: 'white' }
      }
    })
  }
}
