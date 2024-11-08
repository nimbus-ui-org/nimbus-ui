import { rem } from '@nimbus-ui/shared'
import { defineSemanticTokens } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'

export const getRadius = (config: NimbusPresetConfig) => {
  let radius = config.radius ?? 'sm'
  radius = typeof radius === 'number' ? rem(radius) : `{radii.${radius}}`

  return defineSemanticTokens.radii({
    default: {
      value: radius,
      description: 'Default theme radius'
    }
  })
}
