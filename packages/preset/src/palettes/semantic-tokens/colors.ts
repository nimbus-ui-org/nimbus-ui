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

const convertPaletteToColorsSemanticTokens = (palette: string) => {
  const isBase = palette === 'base'

  const getColor = (shade: ColorShade) => ({
    _light: `{colors.${palette}.${shade}.light}`,
    _dark: `{colors.${palette}.${shade}.dark}`
  })

  return defineSemanticTokens.colors({
    DEFAULT: { value: getColor('9') },
    solid: {
      DEFAULT: { value: isBase ? getColor('12') : getColor('9') },
      hover: { value: isBase ? getColor('11') : getColor('10') },
      active: { value: isBase ? getColor('12') : getColor('9') },
      text: { value: getColor('contrastText') }
    },
    ghost: {
      DEFAULT: { value: getColor('a3') },
      hover: { value: getColor('a4') },
      active: { value: getColor('a5') },
      text: { value: isBase ? getColor('a12') : getColor('a11') }
    },
    outline: {
      DEFAULT: { value: '{colors.transparent}' },
      hover: { value: getColor('a3') },
      active: { value: getColor('a4') },
      border: { value: isBase ? getColor('a7') : getColor('a6') },
      text: { value: isBase ? getColor('a12') : getColor('a11') }
    },
    border: {
      DEFAULT: { value: getColor('6') },
      hover: { value: getColor('7') },
      active: { value: getColor('8') }
    },
    disabled: {
      DEFAULT: { value: getColor('a3') },
      border: { value: getColor('a5') },
      text: { value: getColor('a7') }
    },
    text: {
      '1': { value: getColor('a12'), description: 'High contrast text.' },
      '2': { value: getColor('a11'), description: 'Low contrast text.' }
    },

    // base palette specific semantic tokens
    ...(isBase && {
      bg: {
        '1': {
          value: getColor('1'),
          description: 'App background.'
        },
        '2': {
          value: {
            _light: `{colors.base.1.light}`,
            _dark: `{colors.base.2.dark}`
          },
          description: 'Subtle background.'
        },
        a1: {
          value: getColor('a1'),
          description: 'Alpha version of app background.'
        },
        a2: {
          value: {
            _light: `{colors.base.a1.light}`,
            _dark: `{colors.base.a2.dark}`
          },
          description: 'Alpha version of Subtle background.'
        }
      },
      overlay: {
        value: 'color-mix(in srgb, {colors.base.1.dark}, transparent 50%)'
      }
    })
  })
}

export const getColors = (
  flattenedPalettes: FlattenedPalettes
): SemanticTokens['colors'] => {
  return Object.keys(flattenedPalettes).reduce((prevPalettes, palette) => {
    return {
      ...prevPalettes,
      [palette]: convertPaletteToColorsSemanticTokens(palette)
    }
  }, {})
}
