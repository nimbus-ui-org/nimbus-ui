import { defineTokens, type Tokens } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'
import { getFonts } from './fonts'
import pandaPreset from '@pandacss/preset-panda'

export const getTokens = (config: NimbusPresetConfig): Tokens => {
  const fonts = getFonts(config)

  // extend panda tokens
  const {
    colors: { white, black, current, transparent },
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
    }
  })
}
