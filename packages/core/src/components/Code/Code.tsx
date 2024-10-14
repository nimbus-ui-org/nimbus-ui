import { styled } from '@nimbus-ui/styled-system/jsx'
import { code } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

export const Code = styled('code', code)
export type CodeProps = ComponentProps<typeof Code>

Code.displayName = 'NimbusUI_Code'
