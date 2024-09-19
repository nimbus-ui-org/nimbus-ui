import { forwardRef } from 'react'
import { ButtonBase, type ButtonBaseProps } from '../ButtonBase'
import type { LoaderProps } from '@components/Loader'
import type { ButtonRecipe } from '@nimbus-ui/styled-system/recipes'
import type { SlotsClasses } from '@utils'

interface Props {
  classNames?: SlotsClasses<ButtonRecipe>
  startSection?: React.ReactNode
  endSection?: React.ReactNode
  isLoading?: boolean
  loaderProps?: LoaderProps
}

export type ButtonProps = ButtonBaseProps & Props

// const button = cva

export const Button = forwardRef(
  (
    { children, ...props }: ButtonProps,
    ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    return (
      <ButtonBase ref={ref} {...props}>
        {children as React.ReactNode}
      </ButtonBase>
    )
  }
)

Button.displayName = 'NimbusUI_Button'
