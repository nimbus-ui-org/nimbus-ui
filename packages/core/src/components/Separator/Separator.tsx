import { styled } from '@nimbus-ui/styled-system/jsx'
import { separator } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { forwardRef } from 'react'
import { Separator as AriaSeparator } from 'react-aria-components'

const UnstyledSeparator = styled(AriaSeparator, separator)
export type SeparatorProps = ComponentProps<typeof UnstyledSeparator>

export const Separator = forwardRef(
  (props: SeparatorProps, ref: React.Ref<HTMLElement>) => {
    return (
      <UnstyledSeparator
        data-orientation={props.orientation ?? 'horizontal'}
        {...props}
        ref={ref}
      />
    )
  }
)

Separator.displayName = 'NimbusUI_Separator'
