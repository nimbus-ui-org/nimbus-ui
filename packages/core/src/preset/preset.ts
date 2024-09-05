import { definePreset, type Preset } from '@pandacss/dev'
import { getGlobalVars } from './global-vars'

export interface NimbusTheme {
  /**
   * The cursor style of interactive elements that don't have cursor styles by default (ex: `Button`)
   * - `default` – default cursor style
   * - `pointer` – adds `pointer` style to these elements
   */
  cursor?: 'default' | 'pointer'
}

const defaultTheme: NimbusTheme = {
  cursor: 'pointer'
}

/** Creates a preset  */
const createNimbusPreset = (theme: NimbusTheme = defaultTheme): Preset => {
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
    globalVars
  })
}

export default createNimbusPreset()
