import { defineTokens, type Tokens } from '@pandacss/dev'
import type { FlattenedPalettes } from '@preset'

export const getPalettesTokens = (
  flattenedPalettes: FlattenedPalettes,
  availableColors: Tokens['colors'] = {}
): Tokens => {
  return {
    colors: Object.keys(flattenedPalettes).reduce((prevPalettes, palette) => {
      const colorName = flattenedPalettes[palette]

      if (!availableColors[colorName]) {
        throw new Error(`"${colorName}" is not an existing color name.`)
      }

      return defineTokens.colors({
        ...prevPalettes,
        [palette]: availableColors[colorName]
      })
    }, {})
  }
}
