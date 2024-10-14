import { styled } from '@nimbus-ui/styled-system/jsx'
import { typography } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

export const Em = styled('em', typography)
export type EmProps = ComponentProps<typeof Em>

Em.displayName = 'NimbusUI_Em'
