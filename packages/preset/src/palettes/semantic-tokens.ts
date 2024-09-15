import { defineSemanticTokens, type SemanticTokens } from '@pandacss/dev'
import type { FlattenedPalettes } from '@preset'

type ColorShade =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'a1'
  | 'a2'
  | 'a3'
  | 'a4'
  | 'a5'
  | 'a6'
  | 'a7'
  | 'a8'
  | 'a9'
  | 'a10'
  | 'a11'
  | 'a12'
  | 'contrastText'

const getColor = (palette: string, shade: ColorShade) => ({
  _light: `{colors.${palette}.${shade}.light}`,
  _dark: `{colors.${palette}.${shade}.dark}`
})

const convertPaletteToSemanticTokens = (palette: string) => {
  return defineSemanticTokens.colors({
    DEFAULT: { value: getColor(palette, '9') },
    solid: {
      DEFAULT: { value: getColor(palette, '9') },
      hover: { value: getColor(palette, '10') },
      active: { value: getColor(palette, '9') },
      text: { value: getColor(palette, 'contrastText') }
    },
    ghost: {
      DEFAULT: { value: getColor(palette, 'a3') },
      hover: { value: getColor(palette, 'a4') },
      active: { value: getColor(palette, 'a5') },
      text: { value: getColor(palette, 'a11') }
    },
    border: {
      DEFAULT: { value: getColor(palette, 'a6') },
      hover: { value: getColor(palette, 'a7') },
      active: { value: getColor(palette, 'a8') }
    },
    text: {
      '1': { value: getColor(palette, 'a12') },
      '2': { value: getColor(palette, 'a11') }
    },

    // base palette specific semantic tokens
    ...(palette === 'base' && {
      bg: {
        '1': {
          value: getColor(palette, '1'),
          description: 'High contrast background'
        },
        '2': {
          value: getColor(palette, '2'),
          description: 'Low contrast background'
        }
      }
    })
  })
}

export const getPalettesSemanticTokens = (
  flattenedPalettes: FlattenedPalettes
): SemanticTokens => {
  return {
    colors: Object.keys(flattenedPalettes).reduce((prevPalettes, palette) => {
      return defineSemanticTokens.colors({
        ...prevPalettes,
        [palette]: convertPaletteToSemanticTokens(palette)
      })
    }, {})
  }
}
