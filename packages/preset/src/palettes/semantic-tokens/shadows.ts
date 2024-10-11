import { defineSemanticTokens, type SemanticTokens } from '@pandacss/dev'
import type { FlattenedPalettes } from '@preset'
import { switchCase } from '@utils'

const convertPaletteToShadowsSemanticTokens = (palette: string) => {
  const getColor = (alphaValue: number, mode: 'light' | 'dark') => {
    let shade = '9'
    if (mode === 'dark') {
      shade = '7'
      if (palette === 'base') {
        shade = '1'
      }
    }
    return `color-mix(in srgb, {colors.${palette}.${shade}.${mode}}, transparent ${(1 - alphaValue) * 100}%)`
  }

  const shadows = switchCase({
    cases: {
      xs: (color: string) => `0 1px 2px 0 ${color}`,
      sm: (color: string) => `0 1px 3px 0 ${color}, 0 1px 2px -1px ${color}`,
      md: (color: string) => `0 4px 6px -1px ${color}, 0 2px 4px -2px ${color}`,
      lg: (color: string) => `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
      xl: (color: string) => `0 20px 25px -5px ${color}, 0 8px 10px -6px ${color}`,
      '2xl': (color: string) => `0 25px 50px -12px ${color}`,
      inner: (color: string) => `inset 0 2px 4px 0 ${color}`
    }
  })

  return defineSemanticTokens.shadows({
    xs: {
      value: {
        _light: shadows('xs')(getColor(0.5, 'light')),
        _dark: shadows('xs')(getColor(0.5, 'dark'))
      }
    },
    sm: {
      value: {
        _light: shadows('sm')(getColor(0.5, 'light')),
        _dark: shadows('sm')(getColor(0.5, 'dark'))
      }
    },
    md: {
      value: {
        _light: shadows('md')(getColor(0.5, 'light')),
        _dark: shadows('md')(getColor(0.5, 'dark'))
      }
    },
    lg: {
      value: {
        _light: shadows('lg')(getColor(0.5, 'light')),
        _dark: shadows('lg')(getColor(0.5, 'dark'))
      }
    },
    xl: {
      value: {
        _light: shadows('xl')(getColor(0.5, 'light')),
        _dark: shadows('xl')(getColor(0.5, 'dark'))
      }
    },
    '2xl': {
      value: {
        _light: shadows('2xl')(getColor(0.8, 'light')),
        _dark: shadows('2xl')(getColor(0.8, 'dark'))
      }
    },
    inner: {
      value: {
        _light: shadows('inner')(getColor(0.2, 'light')),
        _dark: shadows('inner')(getColor(0.2, 'dark'))
      }
    }
  })
}

export const getShadows = (
  flattenedPalettes: FlattenedPalettes
): SemanticTokens['shadows'] => {
  return Object.keys(flattenedPalettes).reduce((prevPalettes, palette) => {
    return {
      ...prevPalettes,
      [palette]: convertPaletteToShadowsSemanticTokens(palette)
    }
  }, {})
}
