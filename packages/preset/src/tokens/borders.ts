import { rem } from '@nimbus-ui/shared'
import { defineTokens } from '@pandacss/dev'

export const borders = defineTokens.borders({
  none: { value: 'none' },
  xs: { value: `${rem(1)} solid` },
  sm: { value: `${rem(2)} solid` },
  md: { value: `${rem(3)} solid` },
  lg: { value: `${rem(4)} solid` },
  xl: { value: `${rem(5)} solid` }
})
