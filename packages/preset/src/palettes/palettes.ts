import type { Preset } from '@pandacss/dev'
import type {
  FlattenedPalettes,
  NimbusPalettes,
  NimbusPresetConfig,
  OtherThemes
} from '@preset'
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

const getOtherThemesPalettes = (otherThemes: OtherThemes = {}) => {
  return {
    extend: Object.keys(otherThemes).reduce((prevThemes, currentTheme) => {
      const palettes = otherThemes[currentTheme]

      return {
        ...prevThemes,
        [currentTheme]: getTokensAndSemanticTokensFromPalettes(palettes)
      }
    }, {})
  }
}

export const getThemePalettes = (
  config: NimbusPresetConfig
): { theme: Preset['theme']; themes: Preset['themes'] } => {
  const { palettes, otherThemes } = config

  const themePalettes = getTokensAndSemanticTokensFromPalettes(palettes)
  const otherThemesPalettes = getOtherThemesPalettes(otherThemes)

  return { theme: themePalettes, themes: otherThemesPalettes }
}
