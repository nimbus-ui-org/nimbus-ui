import { styled } from '@nimbus-ui/styled-system/jsx'
import { loader } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import React, { forwardRef } from 'react'

const StyledSpan = styled('span', loader)
export type StyledSpanProps = ComponentProps<typeof StyledSpan>

export const Loader = forwardRef(
  ({ variant, ...props }: StyledSpanProps, ref: React.Ref<HTMLSpanElement>) => {
    return (
      <StyledSpan variant={variant} {...props} ref={ref}>
        <span />
        <span />
        <span />
        {variant === 'spinner' && (
          <>
            <span />
            <span />
            <span />
            <span />
            <span />
          </>
        )}
      </StyledSpan>
    )
  }
)

Loader.displayName = 'NimbusUI_Loader'
