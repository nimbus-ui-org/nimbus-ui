import { definePreset, type Preset } from '@pandacss/dev'
import type { NimbusPresetConfig } from './preset.types'
import { getGlobalVars } from '@global-vars'

const defaultConfig: NimbusPresetConfig = {
  cursor: 'pointer'
}

/** Creates a preset  */
export const createNimbusPreset = (theme: NimbusPresetConfig = defaultConfig): Preset => {
  const globalVars = getGlobalVars(theme)

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
    globalCss: {
      extend: {
        body: {
          bg: { base: 'white', _dark: 'gray.900' },
          color: { base: 'gray.900', _dark: 'white' }
        }
      }
    },
    globalVars
  })
}

export default createNimbusPreset()
