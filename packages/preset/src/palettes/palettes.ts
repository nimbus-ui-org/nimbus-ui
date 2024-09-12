import type { Tokens } from '@pandacss/dev'
import type { NimbusPresetConfig, NimbusThemeColors } from '@preset'

const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950'
]

/* converts array of colors to object of shades and color values */
const convertConfigColorsToTokenColors = (
  colors: NimbusThemeColors = {}
): Tokens['colors'] => {
  return Object.keys(colors).reduce((prevColors, color) => {
    return {
      ...prevColors,
      [color]: colors[color]?.reduce((prevColorValues, colorValue, i) => {
        return {
          ...prevColorValues,
          [shades[i]]: { value: colorValue }
        }
      }, {})
    }
  }, {})
}

export const getThemePalettes = (config: NimbusPresetConfig) => {
  const { colors } = config

  const customColors = convertConfigColorsToTokenColors(colors)

  console.log(customColors)
}
