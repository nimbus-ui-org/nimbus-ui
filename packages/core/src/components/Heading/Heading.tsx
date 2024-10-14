import { styled } from '@nimbus-ui/styled-system/jsx'
import { typography } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { Heading as AriaHeading } from 'react-aria-components'

export const Heading = styled(AriaHeading, typography)
export type HeadingProps = ComponentProps<typeof Heading>

Heading.displayName = 'NimbusUI_Heading'
