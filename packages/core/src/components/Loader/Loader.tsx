import { styled } from '@nimbus-ui/styled-system/jsx'
import { loader } from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { forwardRef } from 'react'

const StyledLoader = styled('span', loader)
export type LoaderProps = ComponentProps<typeof StyledLoader>

export const Loader = forwardRef(
  ({ variant, children, ...props }: LoaderProps, ref: React.Ref<HTMLSpanElement>) => {
    return (
      <StyledLoader variant={variant} {...props} ref={ref}>
        <span />
        <span />
        <span />
        {(variant ?? 'spinner') === 'spinner' && (
          <>
            <span />
            <span />
            <span />
            <span />
            <span />
          </>
        )}
        {children}
      </StyledLoader>
    )
  }
)

Loader.displayName = 'NimbusUI_Loader'
