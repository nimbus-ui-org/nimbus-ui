import { defineSemanticTokens } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'

export const getRadius = (config: NimbusPresetConfig) => {
  const radius = config.radius ?? 'md'

  return defineSemanticTokens.radii({
    default: {
      value: `{radii.${radius}}`,
      description: 'Default theme radius'
    }
  })
}
