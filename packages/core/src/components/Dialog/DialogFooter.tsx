import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { forwardRef } from 'react'

const StyledDialogFooter = styled('footer')
export type DialogFooterProps = ComponentProps<typeof StyledDialogFooter>

export const DialogFooter = forwardRef(
  ({ ...props }: DialogFooterProps, ref: React.Ref<HTMLElement>) => {
    return <StyledDialogFooter data-section="footer" {...props} ref={ref} />
  }
)

DialogFooter.displayName = 'NimbusUI_DialogFooter'
