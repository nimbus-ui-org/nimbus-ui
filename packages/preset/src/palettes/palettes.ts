import type { Preset } from '@pandacss/dev'
import type { FlattenedPalettes, NimbusPalettes, NimbusPresetConfig } from '@preset'
import { getPalettesTokens } from './tokens'
import { NimbusColors } from './colors'
import { getPalettesSemanticTokens } from './semantic-tokens'

const getTokensAndSemanticTokensFromPalettes = (palettes: NimbusPalettes = {}) => {
  const { primary, base, error, other } = palettes

  const flattenedPalettes: FlattenedPalettes = {
    primary: primary ?? NimbusColors.Primary.Blue,
    base: base ?? NimbusColors.Base.Gray,
    error: error ?? NimbusColors.Error.Red,
    ...other
  }

  const tokens = getPalettesTokens(flattenedPalettes)
  const semanticTokens = getPalettesSemanticTokens(flattenedPalettes)

  return { tokens, semanticTokens }
}

export const getThemePalettes = (
  config: NimbusPresetConfig
): { theme: Preset['theme'] } => {
  const { palettes } = config

  const themePalettes = getTokensAndSemanticTokensFromPalettes(palettes)

  return { theme: themePalettes }
}
