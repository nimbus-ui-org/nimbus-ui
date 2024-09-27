import { ButtonContext as AriaButtonContext } from 'react-aria-components'
import type { ButtonProps } from './Button'
import type { PropsWithChildren } from 'react'

type AnyProp = {
  [prop: string]: unknown
}

type ButtonContextProps = PropsWithChildren<Omit<ButtonProps, 'children'>> & AnyProp

export const ButtonContext = ({ children, ref, ...props }: ButtonContextProps) => {
  return (
    <AriaButtonContext.Provider
      value={{ ref: ref as React.Ref<HTMLButtonElement>, ...props }}
    >
      {children}
    </AriaButtonContext.Provider>
  )
}
