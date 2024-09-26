import { defineTokens, type Tokens } from '@pandacss/dev'
import type { FlattenedPalettes } from '@preset'
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

const getCoreColors = (primary: string, base: string) => {
  const coreLightColors = generateColors({
    appearance: 'light',
    accent: primary,
    gray: base,
    background: '#FFF'
  })
  const coreDarkColors = generateColors({
    appearance: 'dark',
    accent: primary,
    gray: base,
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
      contrast: '#FFF'
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
        accent: colorValue,
        gray: base,
        background: '#FFF'
      })
      const darkColors = generateColors({
        appearance: 'dark',
        accent: colorValue,
        gray: base,
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
