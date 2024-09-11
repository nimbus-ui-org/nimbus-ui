import { definePreset, type Preset } from '@pandacss/dev'
import type { NimbusPresetConfig } from './preset.types'
import { getGlobalCss } from '@global-css/global-css'
import pandaPreset from '@pandacss/preset-panda'
import { getTokens } from '@tokens'
import { getSemanticTokens } from '@semantic-tokens'

/** Creates a Nimbus preset. */
export const createNimbusPreset = (config: NimbusPresetConfig = {}): Preset => {
  const globalCss = getGlobalCss(config)
  const tokens = getTokens(config)
  const semanticTokens = getSemanticTokens(config)

  // const { themePalettes, otherThemesPalettes } = getThemePalettes(config)

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
        keyframes
        // textStyles,
        // recipes,
        // slotRecipes,
      }
    },
    globalCss
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
