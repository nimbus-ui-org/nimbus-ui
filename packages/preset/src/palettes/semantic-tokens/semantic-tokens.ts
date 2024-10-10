import { type SemanticTokens } from '@pandacss/dev'
import type { FlattenedPalettes } from '@preset'
import { getColors } from './colors'
import { getShadows } from './shadows'

export const getPalettesSemanticTokens = (
  flattenedPalettes: FlattenedPalettes
): SemanticTokens => {
  const colors = getColors(flattenedPalettes)
  const shadows = getShadows(flattenedPalettes)

  return {
    colors,
    shadows
  }
}
