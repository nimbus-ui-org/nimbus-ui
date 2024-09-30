export const renderChildren = <T>(
  children: React.ReactNode | ((values: T) => React.ReactNode),
  renderProps: T
) => (typeof children === 'function' ? children(renderProps) : children)
