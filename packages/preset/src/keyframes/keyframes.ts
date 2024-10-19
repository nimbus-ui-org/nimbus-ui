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
  },
  fade: {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  'fade-to-right': {
    from: {
      translate: '-10% 0',
      opacity: 0
    },
    to: {
      translate: 0,
      opacity: 1
    }
  },
  'fade-to-left': {
    from: {
      translate: '10% 0',
      opacity: 0
    },
    to: {
      translate: 0,
      opacity: 1
    }
  },
  'fade-to-top': {
    from: {
      translate: '0 10%',
      opacity: 0
    },
    to: {
      translate: 0,
      opacity: 1
    }
  },
  'fade-to-bottom': {
    from: {
      translate: '0 -10%',
      opacity: 0
    },
    to: {
      translate: 0,
      opacity: 1
    }
  },
  'slide-to-right': {
    from: {
      translate: '-100% 0'
    },
    to: {
      translate: 0
    }
  },
  'slide-to-left': {
    from: {
      translate: '100% 0'
    },
    to: {
      translate: 0
    }
  },
  'slide-to-top': {
    from: {
      translate: '0 100%'
    },
    to: {
      translate: 0
    }
  },
  'slide-to-bottom': {
    from: {
      translate: '0 -100%'
    },
    to: {
      translate: 0
    }
  },
  scale: {
    from: {
      scale: 0
    },
    to: {
      scale: 1
    }
  },
  'scale-x': {
    from: {
      scale: '0 1'
    },
    to: {
      scale: 1
    }
  },
  'scale-y': {
    from: {
      scale: '1 0'
    },
    to: {
      scale: 1
    }
  },
  pop: {
    from: {
      opacity: 0,
      scale: 0.9
    },
    to: {
      opacity: 1,
      scale: 1
    }
  },
  'popover-dialog': {
    from: {
      scale: 0.9
    },
    to: {
      scale: 1
    }
  }
})
