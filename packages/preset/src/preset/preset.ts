import { definePreset, type Preset } from '@pandacss/dev'
import type { NimbusPresetConfig } from './preset.types'
import { getGlobalCss } from '@global-css/global-css'

const defaultConfig: NimbusPresetConfig = {
  cursor: 'pointer'
}

/** Creates a preset  */
export const createNimbusPreset = (
  config: NimbusPresetConfig = defaultConfig
): Preset => {
  const globalCss = getGlobalCss(config)

  return definePreset({
    name: '@nimbus-ui/preset',
    theme: {
      extend: {
        semanticTokens: {
          colors: {
            primary: {
              hover: {
                value: '{colors.rose.500}'
              }
            }
          },
          radii: {
            default: {
              value: '{radii.sm}'
            }
          }
        }
      }
    },
    globalCss
  })
}

export default createNimbusPreset()
