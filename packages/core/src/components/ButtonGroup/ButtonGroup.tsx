import { forwardRef } from 'react'
import { buttonGroup } from '@nimbus-ui/styled-system/recipes'
import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'

interface Props {
  /**
   * If `true` `Button` and `IconButton` in the group components will be attached.
   */
  isAttached?: boolean
}

const StyledButtonGroup = styled('div', buttonGroup)
export type ButtonGroupProps = ComponentProps<typeof StyledButtonGroup> & Props

export const ButtonGroup = forwardRef(
  ({ isAttached, ...props }: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <StyledButtonGroup
        data-attached={isAttached || undefined}
        role="group"
        {...props}
        ref={ref}
      />
    )
  }
)

ButtonGroup.displayName = 'NimbusUI_ButtonGroup'
