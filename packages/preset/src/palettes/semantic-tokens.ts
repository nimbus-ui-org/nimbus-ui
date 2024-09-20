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

const convertPaletteToSemanticTokens = (palette: string) => {
  const getColor = (shade: ColorShade) => ({
    _light: `{colors.${palette}.${shade}.light}`,
    _dark: `{colors.${palette}.${shade}.dark}`
  })

  return defineSemanticTokens.colors({
    DEFAULT: { value: getColor('9') },
    solid: {
      DEFAULT: { value: getColor('9') },
      hover: { value: getColor('10') },
      active: { value: getColor('9') },
      text: { value: getColor('contrastText') }
    },
    ghost: {
      DEFAULT: { value: getColor('a3') },
      hover: { value: getColor('a4') },
      active: { value: getColor('a5') },
      text: { value: getColor('a11') }
    },
    outline: {
      DEFAULT: { value: '{colors.transparent}' },
      hover: { value: getColor('a3') },
      active: { value: getColor('a4') },
      text: { value: getColor('a11') }
    },
    disabled: {
      Default: { value: getColor('a3') },
      text: { value: getColor('a8') }
    },
    border: {
      DEFAULT: { value: getColor('a6') },
      hover: { value: getColor('a7') },
      active: { value: getColor('a8') }
    },
    text: {
      '1': { value: getColor('a12') },
      '2': { value: getColor('a11') }
    },

    // base palette specific semantic tokens
    ...(palette === 'base' && {
      bg: {
        '1': {
          value: getColor('1'),
          description: 'High contrast background'
        },
        '2': {
          value: getColor('2'),
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
