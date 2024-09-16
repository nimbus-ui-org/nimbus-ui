import { defineTokens } from '@pandacss/dev'
import { rem } from '@utils'

export const borders = defineTokens.borderWidths({
  none: { value: 'none' },
  xs: { value: `${rem(1)} solid` },
  sm: { value: `${rem(2)} solid` },
  md: { value: `${rem(3)} solid` },
  lg: { value: `${rem(4)} solid` },
  xl: { value: `${rem(5)} solid` }
})
