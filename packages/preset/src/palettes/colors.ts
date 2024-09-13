import type { Tokens } from '@pandacss/dev'
import type { NimbusThemeColors } from '@preset'
import pandaPreset from '@pandacss/preset-panda'

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

/* converts array of colors to object of shades and values */
const convertColorsArrayToObjectShades = (colors: NimbusThemeColors, color: string) => {
  return colors[color]?.reduce((prevColorValues, colorValue, i) => {
    return {
      ...prevColorValues,
      [shades[i]]: { value: colorValue }
    }
  }, {})
}

/* converts config colors to token colors */
const convertConfigColorsToTokenColors = (
  colors: NimbusThemeColors = {}
): Tokens['colors'] => {
  return Object.keys(colors).reduce((prevColors, color) => {
    return {
      ...prevColors,
      [color]: convertColorsArrayToObjectShades(colors, color)
    }
  }, {})
}

export const getAvailableColors = (colors?: NimbusThemeColors) => {
  const customColors = convertConfigColorsToTokenColors(colors)
  const { white, black, transparent, current, ...pandaColors } =
    pandaPreset.theme.tokens.colors

  return {
    ...pandaColors,
    ...customColors
  }
}
