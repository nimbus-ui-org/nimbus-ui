import { defineKeyframes } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'

export const keyframes = defineKeyframes({
  ...pandaPreset.theme.keyframes,
  'loading-spinner': {
    '0%': { opacity: 1 },
    '100%': { opacity: 0.25 }
  },
  'loading-bars': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.15 },
    '100%': { opacity: 1 }
  },
  'loading-dots': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(0)' },
    '100%': { transform: 'scale(1)' }
  }
})
