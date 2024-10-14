import { styled } from '@nimbus-ui/styled-system/jsx'
import { blockquote } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

export const Blockquote = styled('blockquote', blockquote)
export type BlockquoteProps = ComponentProps<typeof Blockquote>

Blockquote.displayName = 'NimbusUI_Blockquote'
