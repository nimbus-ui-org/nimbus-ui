import { NimbusColors } from '@palettes'
import { generateColors } from '@utils'
import Color from 'colorjs.io'

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
      const lightSolidBg = new Color(lightColors.accentScale[8])
      const lightSolidFg = new Color(lightColors.accentContrast)

      expect(lightSolidBg.contrastWCAG21(lightSolidFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aa
      )

      const darkSolidBg = new Color(darkColors.accentScale[8])
      const darkSolidFg = new Color(darkColors.accentContrast)

      expect(darkSolidBg.contrastWCAG21(darkSolidFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aa
      )

      // test ghost colors and their corresponding contrast text
      const lightGhostBg = new Color(lightColors.accentScale[2])
      const lightGhostFg = new Color(lightColors.accentScale[10])

      expect(lightGhostBg.contrastWCAG21(lightGhostFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aaAlpha
      )

      const darkGhostBg = new Color(darkColors.accentScale[2])
      const darkGhostFg = new Color(darkColors.accentScale[10])

      expect(darkGhostBg.contrastWCAG21(darkGhostFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aaAlpha
      )
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
      const lightSolidBg = new Color(lightColors.grayScale[11])
      const lightSolidFg = new Color('#FFFFFF')

      expect(lightSolidBg.contrastWCAG21(lightSolidFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aa
      )

      const darkSolidBg = new Color(darkColors.grayScale[11])
      const darkSolidFg = new Color(darkColors.grayScale[0])

      expect(darkSolidBg.contrastWCAG21(darkSolidFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aa
      )

      // test ghost colors and their corresponding contrast text
      const lightGhostBg = new Color(lightColors.grayScale[2])
      const lightGhostFg = new Color(lightColors.grayScale[10])

      expect(lightGhostBg.contrastWCAG21(lightGhostFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aaAlpha
      )

      const darkGhostBg = new Color(darkColors.grayScale[2])
      const darkGhostFg = new Color(darkColors.grayScale[10])

      expect(darkGhostBg.contrastWCAG21(darkGhostFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aaAlpha
      )
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
      const lightSolidBg = new Color(lightColors.accentScale[8])
      const lightSolidFg = new Color(lightColors.accentContrast)

      expect(lightSolidBg.contrastWCAG21(lightSolidFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aa
      )

      const darkSolidBg = new Color(darkColors.accentScale[8])
      const darkSolidFg = new Color(darkColors.accentContrast)

      expect(darkSolidBg.contrastWCAG21(darkSolidFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aa
      )

      // test ghost colors and their corresponding contrast text
      const lightGhostBg = new Color(lightColors.accentScale[2])
      const lightGhostFg = new Color(lightColors.grayScale[10])

      expect(lightGhostBg.contrastWCAG21(lightGhostFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aaAlpha
      )

      const darkGhostBg = new Color(darkColors.accentScale[2])
      const darkGhostFg = new Color(darkColors.accentScale[10])

      expect(darkGhostBg.contrastWCAG21(darkGhostFg)).toBeGreaterThanOrEqual(
        ContrastWCAG.aaAlpha
      )
    })
  })
})
