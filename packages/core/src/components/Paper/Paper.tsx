import { styled } from '@nimbus-ui/styled-system/jsx'
import { paper } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { forwardRef } from 'react'

const StyledPaper = styled('div', paper)
export type PaperProps = ComponentProps<typeof StyledPaper>

export const Paper = forwardRef(
  ({ ...props }: PaperProps, ref: React.Ref<HTMLDivElement>) => {
    return <StyledPaper {...props} ref={ref} />
  }
)

Paper.displayName = 'NimbusUI_Paper'
