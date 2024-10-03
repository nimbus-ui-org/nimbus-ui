import { defineKeyframes } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'

export const keyframes = defineKeyframes({
  ...pandaPreset.theme.keyframes,
  'loading-spinner': {
    '0%': { opacity: 1, scale: 1 },
    '100%': { opacity: 0.25, scale: 1 }
  },
  'loading-bars': {
    '0%': { opacity: 1, scale: 1 },
    '15%': { opacity: 0.15, scale: 0.7 },
    '40%': { scale: 1 },
    '100%': { opacity: 1 }
  },
  'loading-dots': {
    '0%': { scale: 1 },
    '50%': { scale: 0 },
    '100%': { scale: 1 }
  }
})
