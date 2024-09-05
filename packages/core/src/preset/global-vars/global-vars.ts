import type { NimbusTheme } from '@preset'

export const getGlobalVars = (theme: NimbusTheme) => {
  const { cursor } = theme
  return {
    '--cursor-type': theme.cursor ?? cursor
  }
}
