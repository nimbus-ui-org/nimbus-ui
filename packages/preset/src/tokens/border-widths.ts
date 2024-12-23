import { rem } from '@nimbus-ui/shared'
import { defineTokens } from '@pandacss/dev'

export const borderWidths = defineTokens.borderWidths({
  none: { value: '0' },
  xs: { value: rem(1) },
  sm: { value: rem(2) },
  md: { value: rem(3) },
  lg: { value: rem(4) },
  xl: { value: rem(5) }
})
