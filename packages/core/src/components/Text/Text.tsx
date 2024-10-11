import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { Text as AriaText } from 'react-aria-components'

export const Text = styled(AriaText)
export type TextProps = ComponentProps<typeof Text>
