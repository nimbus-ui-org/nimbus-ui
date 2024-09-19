export type AriaProps<T extends React.ComponentPropsWithoutRef<React.ElementType>> = Omit<
  T,
  'className'
> & {
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SlotsClasses<SlotRecipe extends (...args: any) => any> = Partial<
  ReturnType<SlotRecipe>
>
