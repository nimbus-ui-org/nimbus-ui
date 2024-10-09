import { defineTokens, type Tokens } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'
import { getFonts } from './fonts'
import pandaPreset from '@pandacss/preset-panda'
import { borderWidths } from './border-widths'
import { animations } from './animations'
import { shadows } from './shadows'
import { borders } from './borders'

export const getTokens = (config: NimbusPresetConfig): Tokens => {
  const fonts = getFonts(config)

  // extend panda tokens
  const {
    colors: { white, black, current, transparent },
    animations: pandaAnimations,
    shadows: pandaShadows,
    ...pandaTokens
  } = pandaPreset.theme.tokens

  return defineTokens({
    ...pandaTokens,
    fonts,
    colors: {
      white,
      black,
      current,
      transparent
    },
    animations: {
      ...pandaAnimations,
      ...animations
    },
    shadows: {
      ...pandaShadows,
      shadows
    },
    borderWidths,
    borders
  })
}
