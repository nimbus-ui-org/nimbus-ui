import { useEffect } from 'react'
import { useFirstRenderState } from './use-first-render-state'

/**
 * A useEffect that doesn't run on the first render when the component mounts.
 * @param {React.EffectCallback} effect Imperative function that can return a cleanup function.
 * @param {React.DependencyList} deps If present, effect will only activate if the values in the list change.
 */
const useUpdateEffect = (effect: React.EffectCallback, deps: React.DependencyList) => {
  const isFirstMount = useFirstRenderState()

  useEffect(
    () => {
      if (!isFirstMount) {
        return effect()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  )
}

export default useUpdateEffect
