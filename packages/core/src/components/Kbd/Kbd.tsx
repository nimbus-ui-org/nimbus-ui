import { styled } from '@nimbus-ui/styled-system/jsx'
import { kbd } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

export const Kbd = styled('kbd', kbd)
export type KbdProps = ComponentProps<typeof Kbd>

Kbd.displayName = 'NimbusUI_Kbd'
