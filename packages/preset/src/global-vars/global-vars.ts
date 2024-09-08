import type { NimbusPresetConfig } from '@preset'

export const getGlobalVars = (config: NimbusPresetConfig) => {
  const { cursor } = config
  return {
    '--cursor-type': cursor ?? 'pointer'
  }
}
