import { defineUtility } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'

export const getUtilities = (config: NimbusPresetConfig) => {
  const { respectMotionPreference, cursor } = config

  const reducedMotion = defineUtility({
    className: 'reduced-motion',
    values: ['preference'],
    transform(value) {
      if (value === 'preference' && respectMotionPreference) {
        return {
          '@media (prefers-reduced-motion: reduce)': {
            transitionProperty: 'none',
            animationName: 'none'
          }
        }
      }
    }
  })

  const cursorType = defineUtility({
    className: 'cursor-type',
    values: ['preference'],
    transform(value) {
      if (value === 'preference' && (cursor ?? 'pointer') === 'pointer') {
        return {
          cursor: 'pointer'
        }
      }
    }
  })

  return { cursorType, reducedMotion }
}
