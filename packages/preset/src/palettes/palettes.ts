import type { Preset, Tokens } from '@pandacss/dev'
import type { FlattenedPalettes, NimbusPalettes, NimbusPresetConfig } from '@preset'
import { getPalettesTokens } from './tokens'
import { getAvailableColors } from './colors'
import { getPalettesSemanticTokens } from './semantic-tokens'

const getTokensAndSemanticTokensFromPalettes = (
  palettes: NimbusPalettes = {},
  availableColors: Tokens['colors']
) => {
  const { primary, base, error, other } = palettes

  const flattenedPalettes: FlattenedPalettes = {
    primary: primary ?? 'blue',
    base: base ?? 'neutral',
    error: error ?? 'red',
    ...other
  }

  const tokens = getPalettesTokens(flattenedPalettes, availableColors)
  const semanticTokens = getPalettesSemanticTokens(flattenedPalettes)

  return { tokens, semanticTokens }
}

export const getThemePalettes = (
  config: NimbusPresetConfig
): { theme: Preset['theme'] } => {
  const { colors, palettes } = config

  const availableColors = getAvailableColors(colors)

  const themePalettes = getTokensAndSemanticTokensFromPalettes(palettes, availableColors)

  return { theme: themePalettes }
}
