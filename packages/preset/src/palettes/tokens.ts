import { defineTokens, type Tokens } from '@pandacss/dev'
import type { FlattenedPalettes, NimbusPalette } from '@preset'
import { generateColors, type ArrayOf12 } from '@utils'

interface GeneratedColors {
  light: {
    scale: ArrayOf12<string>
    alphaScale: ArrayOf12<string>
    contrast: string
  }
  dark: {
    scale: ArrayOf12<string>
    alphaScale: ArrayOf12<string>
    contrast: string
  }
}

const getPaletteColor = (
  paletteColor: string | NimbusPalette,
  mode: 'light' | 'dark'
) => {
  if (typeof paletteColor === 'string') {
    return paletteColor
  } else {
    return paletteColor[mode]
  }
}

const getCoreColors = (primary: string | NimbusPalette, base: string | NimbusPalette) => {
  const primaryLight = getPaletteColor(primary, 'light')
  const primaryDark = getPaletteColor(primary, 'dark')

  const baseLight = getPaletteColor(base, 'light')
  const baseDark = getPaletteColor(base, 'dark')

  const coreLightColors = generateColors({
    appearance: 'light',
    accent: primaryLight,
    gray: baseLight,
    background: '#FFF'
  })
  const coreDarkColors = generateColors({
    appearance: 'dark',
    accent: primaryDark,
    gray: baseDark,
    background: '#020202'
  })

  const primaryColors: GeneratedColors = {
    light: {
      scale: coreLightColors.accentScale,
      alphaScale: coreLightColors.accentScaleAlpha,
      contrast: coreLightColors.accentContrast
    },
    dark: {
      scale: coreDarkColors.accentScale,
      alphaScale: coreDarkColors.accentScaleAlpha,
      contrast: coreDarkColors.accentContrast
    }
  }

  const baseColors: GeneratedColors = {
    light: {
      scale: coreLightColors.grayScale,
      alphaScale: coreLightColors.grayScaleAlpha,
      contrast: '#FFF'
    },
    dark: {
      scale: coreDarkColors.grayScale,
      alphaScale: coreDarkColors.grayScaleAlpha,
      contrast: coreDarkColors.grayScale[0]
    }
  }

  return { primaryColors, baseColors }
}

const convertColorsToTokens = (colors: GeneratedColors) => {
  const tokens: Tokens['colors'] = {}

  // scale values (1 --> 12)
  Array.from({ length: 12 }, (_, i) => {
    tokens[i + 1] = {
      light: {
        value: colors.light.scale[i]
      },
      dark: {
        value: colors.dark.scale[i]
      }
    }
  })

  // alpha scale value (a1 --> a12)
  Array.from({ length: 12 }, (_, i) => {
    tokens[`a${i + 1}`] = {
      light: {
        value: colors.light.alphaScale[i]
      },
      dark: {
        value: colors.dark.alphaScale[i]
      }
    }
  })

  tokens.contrastText = {
    light: {
      value: colors.light.contrast
    },
    dark: {
      value: colors.dark.contrast
    }
  }

  return tokens
}

export const getPalettesTokens = (flattenedPalettes: FlattenedPalettes): Tokens => {
  const { primary, base, ...remainingPalettes } = flattenedPalettes

  const { primaryColors, baseColors } = getCoreColors(primary, base)

  const palettes = defineTokens.colors({
    primary: convertColorsToTokens(primaryColors),
    base: convertColorsToTokens(baseColors)
  })

  return {
    colors: Object.keys(remainingPalettes).reduce((prevPalettes, palette) => {
      const colorValue = flattenedPalettes[palette]

      const lightColors = generateColors({
        appearance: 'light',
        accent: getPaletteColor(colorValue, 'light'),
        gray: getPaletteColor(base, 'light'),
        background: '#FFF'
      })
      const darkColors = generateColors({
        appearance: 'dark',
        accent: getPaletteColor(colorValue, 'dark'),
        gray: getPaletteColor(base, 'dark'),
        background: '#020202'
      })

      const colors: GeneratedColors = {
        light: {
          scale: lightColors.accentScale,
          alphaScale: lightColors.accentScaleAlpha,
          contrast: lightColors.accentContrast
        },
        dark: {
          scale: darkColors.accentScale,
          alphaScale: darkColors.accentScaleAlpha,
          contrast: darkColors.accentContrast
        }
      }

      return defineTokens.colors({
        ...prevPalettes,
        [palette]: convertColorsToTokens(colors)
      })
    }, palettes)
  }
}
