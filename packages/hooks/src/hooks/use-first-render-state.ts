import { useRef } from 'react'

/**
 * Checks if the current render is the first render.
 * @returns `true` if it's the first render, and `false` otherwise.
 */
export const useFirstRenderState = (): boolean => {
  const isFirst = useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}
