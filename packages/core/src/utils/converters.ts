export const rem = (px?: number) => {
  return typeof px === 'number' ? `${px / 16}rem` : undefined
}
