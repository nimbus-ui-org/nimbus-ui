import { ToggleButtonContext as AriaToggleButtonContext } from 'react-aria-components'
import type { PropsWithChildren } from 'react'
import type { ToggleButtonProps } from './ToggleButton'

type Props = {
  selectedValue?: string | null
  [prop: string]: unknown
}

export type ToggleButtonProviderProps = PropsWithChildren<
  Omit<ToggleButtonProps, 'children' | 'value'>
> &
  Props

export const ToggleButtonProvider = ({
  children,
  ref,
  onChange,
  ...props
}: ToggleButtonProviderProps) => {
  return (
    <AriaToggleButtonContext.Provider
      value={{
        ref: ref as React.Ref<HTMLButtonElement>,
        onChange: onChange as (isSelected: boolean) => void,
        ...props
      }}
    >
      {children}
    </AriaToggleButtonContext.Provider>
  )
}
