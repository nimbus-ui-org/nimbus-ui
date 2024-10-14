import { styled } from '@nimbus-ui/styled-system/jsx'
import { typography } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

export const Quote = styled('q', typography)
export type QuoteProps = ComponentProps<typeof Quote>

Quote.displayName = 'NimbusUI_Quote'
