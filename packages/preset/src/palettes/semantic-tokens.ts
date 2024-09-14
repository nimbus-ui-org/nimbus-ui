import { defineSemanticTokens, type SemanticTokens } from '@pandacss/dev'
import type { FlattenedPalettes } from '@preset'

const alpha = (color: string, ratio: number) => {
  const percent = (1 - ratio) * 100
  return `color-mix(in srgb, ${color}, transparent ${percent}%)`
}

const convertPaletteToSemanticTokens = (palette: string) => {
  return defineSemanticTokens.colors({
    DEFAULT: {
      value: { _light: `{colors.${palette}.500}`, _dark: `{colors.${palette}.300}` }
    },
    solid: {
      DEFAULT: {
        value: { _light: `{colors.${palette}.600}`, _dark: `{colors.${palette}.300}` }
      },
      hover: {
        value: { _light: `{colors.${palette}.700}`, _dark: `{colors.${palette}.400}` }
      },
      active: {
        value: { _light: `{colors.${palette}.800}`, _dark: `{colors.${palette}.500}` }
      },
      text: {
        value: { _light: `{colors.white}`, _dark: `{colors.base.950}` }
      }
    },
    ghost: {
      DEFAULT: {
        value: {
          _light: alpha(`{colors.${palette}.500}`, 0.2),
          _dark: alpha(`{colors.${palette}.300}`, 0.2)
        }
      },
      hover: {
        value: {
          _light: alpha(`{colors.${palette}.500}`, 0.3),
          _dark: alpha(`{colors.${palette}.300}`, 0.3)
        }
      },
      active: {
        value: {
          _light: alpha(`{colors.${palette}.500}`, 0.4),
          _dark: alpha(`{colors.${palette}.300}`, 0.4)
        }
      },
      text: {
        value: { _light: `{colors.${palette}.500}`, _dark: `{colors.${palette}.300}` }
      }
    }
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
