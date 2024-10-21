import { styled } from '@nimbus-ui/styled-system/jsx'
import { separator } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { Separator as AriaSeparator } from 'react-aria-components'

export const Separator = styled(AriaSeparator, separator)
export type SeparatorProps = ComponentProps<typeof Separator>

Separator.displayName = 'NimbusUI_Separator'
