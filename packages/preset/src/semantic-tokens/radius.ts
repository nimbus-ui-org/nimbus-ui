import { defineSemanticTokens } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'

export const getRadius = (config: NimbusPresetConfig) => {
  const radius = config.radius

  return defineSemanticTokens.radii({
    default: {
      value: radius ?? `{radii.${radius}`
    }
  })
}
