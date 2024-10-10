import { type Tokens } from '@pandacss/dev'
import type { FlattenedPalettes } from '@preset'
import { getColors } from './colors'

export const getPalettesTokens = (flattenedPalettes: FlattenedPalettes): Tokens => {
  const colors = getColors(flattenedPalettes)

  return {
    colors
  }
}
