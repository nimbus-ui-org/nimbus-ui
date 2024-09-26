import { NimbusColors } from '@palettes'
import { generateColors } from '@utils'
import { getContrast } from 'color2k'

enum ContrastWCAG {
  a = 3.1,
  aa = 4.5
}

const targetGuildine = ContrastWCAG.aa

describe('NimbusColors', () => {
  Object.keys(NimbusColors.Primary).forEach((color) => {
    const lightColors = generateColors({
      appearance: 'light',
      accent: NimbusColors.Primary[color as keyof typeof NimbusColors.Primary],
      gray: NimbusColors.Base.Gray,
      background: '#FFF'
    })

    const darkColors = generateColors({
      appearance: 'dark',
      accent: NimbusColors.Primary[color as keyof typeof NimbusColors.Primary],
      gray: NimbusColors.Base.Gray,
      background: '#020202'
    })

    test(`if colors generated from primary color ${color} have enough contrast to meet WCAG guidlines`, () => {
      // test solid colors and their corresponding contrast text
      expect(
        getContrast(lightColors.accentContrast, lightColors.accentScale[8])
      ).toBeGreaterThanOrEqual(targetGuildine)
      expect(
        getContrast(darkColors.accentContrast, darkColors.accentScale[8])
      ).toBeGreaterThanOrEqual(targetGuildine)

      // test ghost colors and their corresponding contrast text
      expect(
        getContrast(lightColors.accentScale[10], lightColors.accentScale[1])
      ).toBeGreaterThanOrEqual(targetGuildine)
      expect(
        getContrast(darkColors.accentScale[10], darkColors.accentScale[1])
      ).toBeGreaterThanOrEqual(targetGuildine)
    })
  })

  Object.keys(NimbusColors.Base).forEach((color) => {
    const lightColors = generateColors({
      appearance: 'light',
      accent: NimbusColors.Primary.Blue,
      gray: NimbusColors.Base[color as keyof typeof NimbusColors.Base],
      background: '#FFF'
    })

    const darkColors = generateColors({
      appearance: 'dark',
      accent: NimbusColors.Primary.Blue,
      gray: NimbusColors.Base[color as keyof typeof NimbusColors.Base],
      background: '#020202'
    })

    test(`if colors generated from base color ${color} have enough contrast to meet WCAG guidlines`, () => {
      // test solid colors and their corresponding contrast text
      expect(getContrast('#FFFFFF', lightColors.grayScale[11])).toBeGreaterThanOrEqual(
        targetGuildine
      )
      expect(
        getContrast(darkColors.grayScale[0], darkColors.grayScale[11])
      ).toBeGreaterThanOrEqual(targetGuildine)

      // test ghost colors and their corresponding contrast text
      expect(
        getContrast(lightColors.grayScale[10], lightColors.grayScale[1])
      ).toBeGreaterThanOrEqual(targetGuildine)
      expect(
        getContrast(darkColors.grayScale[10], darkColors.grayScale[1])
      ).toBeGreaterThanOrEqual(targetGuildine)
    })
  })

  Object.keys(NimbusColors.Error).forEach((color) => {
    const lightColors = generateColors({
      appearance: 'light',
      accent: NimbusColors.Error[color as keyof typeof NimbusColors.Error],
      gray: NimbusColors.Base.Gray,
      background: '#FFF'
    })

    const darkColors = generateColors({
      appearance: 'dark',
      accent: NimbusColors.Error[color as keyof typeof NimbusColors.Error],
      gray: NimbusColors.Base.Gray,
      background: '#020202'
    })

    test(`if colors generated from base color ${color} have enough contrast to meet WCAG guidlines`, () => {
      // test solid colors and their corresponding contrast text
      expect(
        getContrast(lightColors.accentContrast, lightColors.accentScale[8])
      ).toBeGreaterThanOrEqual(targetGuildine)
      expect(
        getContrast(darkColors.accentContrast, darkColors.accentScale[8])
      ).toBeGreaterThanOrEqual(targetGuildine)

      // test ghost colors and their corresponding contrast text
      expect(
        getContrast(lightColors.accentScale[10], lightColors.accentScale[1])
      ).toBeGreaterThanOrEqual(targetGuildine)
      expect(
        getContrast(darkColors.accentScale[10], darkColors.accentScale[1])
      ).toBeGreaterThanOrEqual(targetGuildine)
    })
  })
})
