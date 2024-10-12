import { styled } from '@nimbus-ui/styled-system/jsx'
import { typography } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { Text as AriaText } from 'react-aria-components'

export const Text = styled(AriaText, typography)
export type TextProps = ComponentProps<typeof Text>
