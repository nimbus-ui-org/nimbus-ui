import { definePreset, type Preset } from '@pandacss/dev'
import type { NimbusPresetConfig } from './preset.types'
import pandaPreset from '@pandacss/preset-panda'
import { getTokens } from '@tokens'
import { getSemanticTokens } from '@semantic-tokens'
import { textStyles } from '@text-styles'
import { getGlobalCss } from '@global-css'
import { getUtilities } from '@utilities'
import { getThemePalettes } from '@palettes'
import { conditions } from '@conditions'
import { generateRadixColors } from '@utils'

/** Creates a Nimbus preset. */
export const createNimbusPreset = (config: NimbusPresetConfig = {}): Preset => {
  const globalCss = getGlobalCss(config)
  const tokens = getTokens(config)
  const semanticTokens = getSemanticTokens(config)
  const utilities = getUtilities(config)
  // const recipes = getRecipes(config)
  // const slotRecipes = getSlotRecipes(config)

  // extend panda theme
  const { breakpoints, containerSizes, keyframes } = pandaPreset.theme

  const generatedLightColors = generateRadixColors({
    appearance: 'light',
    accent: '#3D63DD',
    gray: '#3D63DD',
    background: '#ffffff'
  })

  const generatedDarkColors = generateRadixColors({
    appearance: 'dark',
    accent: '#3D63DD',
    gray: '#3D63DD',
    background: '#020202'
  })

  console.log(generatedLightColors)

  const basePreset = definePreset({
    name: '@nimbus-ui/preset-base',
    theme: {
      extend: {
        tokens,
        semanticTokens,
        breakpoints,
        containerSizes,
        keyframes,
        textStyles
        // recipes,
        // slotRecipes,
      }
    },
    globalCss: {
      extend: globalCss
    },
    utilities: {
      extend: utilities
    },
    conditions: {
      extend: conditions
    }
  })

  const { theme } = getThemePalettes(config)

  return definePreset({
    name: '@nimbus-ui/preset',
    presets: [basePreset],
    theme: {
      extend: theme
    }
    // themes: {
    //   extend: otherThemePalettes
    // }
  })
}

export default createNimbusPreset()
