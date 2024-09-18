export type AriaProps<T extends React.ComponentPropsWithoutRef<React.ElementType>> = Omit<
  T,
  'className'
> & {
  className?: string
}
