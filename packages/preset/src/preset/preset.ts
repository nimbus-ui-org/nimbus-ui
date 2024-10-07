import { definePreset, type Preset } from '@pandacss/dev'
import type { NimbusPresetConfig } from './preset.types'
import pandaPreset from '@pandacss/preset-panda'
import { getTokens } from '@tokens'
import { getSemanticTokens } from '@semantic-tokens'
import { textStyles } from '@text-styles'
import { globalCss } from '@global-css'
import { getUtilities } from '@utilities'
import { getThemePalettes } from '@palettes'
import { conditions } from '@conditions'
import { recipes } from '@recipes'
import { keyframes } from '@keyframes'
import { slotRecipes } from '@slot-recipes'

/** Creates a Nimbus preset. */
export const createNimbusPreset = (config: NimbusPresetConfig = {}): Preset => {
  const tokens = getTokens(config)
  const semanticTokens = getSemanticTokens(config)
  const utilities = getUtilities(config)

  // extend panda theme
  const { breakpoints, containerSizes } = pandaPreset.theme

  const basePreset = definePreset({
    name: '@nimbus-ui/preset-base',
    theme: {
      extend: {
        tokens,
        semanticTokens,
        keyframes,
        textStyles,
        recipes,
        slotRecipes,
        breakpoints,
        containerSizes
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

  const { theme, themes } = getThemePalettes(config)

  return definePreset({
    name: '@nimbus-ui/preset',
    presets: [basePreset],
    theme: {
      extend: theme
    },
    themes
  })
}

export default createNimbusPreset()
