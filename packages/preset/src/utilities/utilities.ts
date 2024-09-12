import { defineUtility } from '@pandacss/dev'
import type { NimbusPresetConfig } from '@preset'

export const getUtilities = (config: NimbusPresetConfig) => {
  const { respectMotionPreference } = config

  const reducedMotion = defineUtility({
    className: 'reduced_motion',
    values: ['preference'],
    transform(value) {
      if (value === 'preference' && respectMotionPreference) {
        return {
          '@media (prefers-reduced-motion: reduce)': {
            transitionProperty: 'none'
          }
        }
      }
    }
  })

  const cursorType = defineUtility({
    className: 'cursor_type',
    values: ['preference'],
    transform(value) {
      if (value === 'preference') {
        return {
          cursor: 'var(--cursor-type)'
        }
      }
    }
  })

  return { cursorType, reducedMotion }
}
