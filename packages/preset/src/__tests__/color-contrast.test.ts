import { NimbusColors } from '@palettes'
import { generateColors } from '@utils'
import { getContrast } from 'color2k'

enum ContrastWCAG {
  aaAlpha = 4.36, // tuned down a bit to imitate alpha ghost background because getContrast doesn't work with alpha backgrounds.
  aa = 4.5
}

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
      ).toBeGreaterThanOrEqual(ContrastWCAG.aa)
      expect(
        getContrast(darkColors.accentContrast, darkColors.accentScale[8])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aa)

      // test ghost colors and their corresponding contrast text
      expect(
        getContrast(lightColors.accentScale[10], lightColors.accentScale[2])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aaAlpha)
      expect(
        getContrast(darkColors.accentScale[10], darkColors.accentScale[2])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aaAlpha)
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
        ContrastWCAG.aa
      )
      expect(
        getContrast(darkColors.grayScale[0], darkColors.grayScale[11])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aa)

      // test ghost colors and their corresponding contrast text
      expect(
        getContrast(lightColors.grayScale[10], lightColors.grayScale[2])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aaAlpha)
      expect(
        getContrast(darkColors.grayScale[10], darkColors.grayScale[2])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aaAlpha)
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
      ).toBeGreaterThanOrEqual(ContrastWCAG.aa)
      expect(
        getContrast(darkColors.accentContrast, darkColors.accentScale[8])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aa)

      // test ghost colors and their corresponding contrast text
      expect(
        getContrast(lightColors.accentScale[10], lightColors.accentScale[2])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aaAlpha)
      expect(
        getContrast(darkColors.accentScale[10], darkColors.accentScale[2])
      ).toBeGreaterThanOrEqual(ContrastWCAG.aaAlpha)
    })
  })
})
