import { forwardRef } from 'react'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

const StyledButtonGroup = styled('div', buttonGroup)
export type ButtonGroupProps = ComponentProps<typeof StyledButtonGroup>

export const ButtonGroup = forwardRef(
  (props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return <StyledButtonGroup role="group" {...props} ref={ref} />
  }
)

ButtonGroup.displayName = 'NimbusUI_ButtonGroup'
