import { defineSemanticTokens, type SemanticTokens } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'
import { getRadius } from './radius'

export const getSemanticTokens = (config: NimbusPresetConfig): SemanticTokens => {
  const radii = getRadius(config)

  return defineSemanticTokens({
    radii
  })
}
