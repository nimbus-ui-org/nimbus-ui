import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { forwardRef } from 'react'

const StyledDialogContent = styled('section')
export type DialogContentProps = ComponentProps<typeof StyledDialogContent>

export const DialogContent = forwardRef(
  ({ ...props }: DialogContentProps, ref: React.Ref<HTMLElement>) => {
    return <StyledDialogContent data-section="content" {...props} ref={ref} />
  }
)

DialogContent.displayName = 'NimbusUI_DialogContent'
