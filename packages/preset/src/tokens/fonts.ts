import type { NimbusPresetConfig } from '@preset'
import pandaPreset from '@pandacss/preset-panda'
import { defineTokens } from '@pandacss/dev'

export const getFonts = (config: NimbusPresetConfig) => {
  const fontFamilies = config.fontFamilies

  // Get system fonts from panda preset
  const { sans, mono } = pandaPreset.theme.tokens.fonts!

  return defineTokens.fonts({
    default: {
      value: fontFamilies?.default ?? (sans.value as string[]),
      description: 'Default font family used by your theme'
    },
    heading: {
      value: fontFamilies?.heading ?? (sans.value as string[]),
      description: 'Font family used in Headings'
    },
    mono: {
      value: fontFamilies?.mono ?? (mono.value as string[]),
      description: 'Font family used in elements that have monospace font'
    }
  })
}
