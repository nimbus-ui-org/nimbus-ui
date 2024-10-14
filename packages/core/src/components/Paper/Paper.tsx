import { styled } from '@nimbus-ui/styled-system/jsx'
import { paper } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

export const Paper = styled('div', paper)
export type PaperProps = ComponentProps<typeof Paper>

Paper.displayName = 'NimbusUI_Paper'
