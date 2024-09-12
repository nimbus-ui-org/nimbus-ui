import { definePreset, type Preset } from '@pandacss/dev'
import type { NimbusPresetConfig } from './preset.types'
import pandaPreset from '@pandacss/preset-panda'
import { getTokens } from '@tokens'
import { getSemanticTokens } from '@semantic-tokens'
import { textStyles } from '@text-styles'
import { getGlobalCss } from '@global-css'
import { getUtilities } from '@utilities'

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
    }
  })

  return definePreset({
    name: '@nimbus-ui/preset',
    presets: [basePreset],
    theme: {
      extend: {
        semanticTokens: {
          colors: {
            primary: {
              DEFAULT: { value: '{colors.purple.500}' },
              hover: {
                value: '{colors.rose.500}'
              }
            }
          }
        }
      }
    }
    // themes: {
    //   extend: otherThemePalettes
    // }
  })
}

export default createNimbusPreset()
