import { defineRecipe } from '@pandacss/dev'

export const transition = defineRecipe({
  className: 'nimbus-transition',
  jsx: ['Transition'],
  base: {
    reducedMotion: 'preference!'
  },
  variants: {
    variant: {
      fade: {
        transitionProperty: 'opacity',
        _in: {
          opacity: 1
        },
        _out: {
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'fade-to-right': {
        transitionProperty: 'opacity, translate',
        translate: 'auto',
        _in: {
          x: 0,
          opacity: 1
        },
        _out: {
          x: '-10%',
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'fade-to-left': {
        transitionProperty: 'opacity, translate',
        translate: 'auto',
        _in: {
          x: 0,
          opacity: 1
        },
        _out: {
          x: '10%',
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'fade-to-top': {
        transitionProperty: 'opacity, translate',
        translate: 'auto',
        _in: {
          y: 0,
          opacity: 1
        },
        _out: {
          y: '10%',
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'fade-to-bottom': {
        transitionProperty: 'opacity, translate',
        translate: 'auto',
        _in: {
          y: 0,
          opacity: 1
        },
        _out: {
          y: '-10%',
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'slide-to-right': {
        transitionProperty: 'translate',
        translate: 'auto',
        _in: {
          x: 0
        },
        _out: {
          x: '-100%'
        },
        _hidden: {
          display: 'none'
        }
      },
      'slide-to-left': {
        transitionProperty: 'translate',
        translate: 'auto',
        _in: {
          x: 0
        },
        _out: {
          x: '100%'
        },
        _hidden: {
          display: 'none'
        }
      },
      'slide-to-top': {
        transitionProperty: 'translate',
        translate: 'auto',
        _in: {
          y: 0
        },
        _out: {
          y: '100%'
        },
        _hidden: {
          display: 'none'
        }
      },
      'slide-to-bottom': {
        transitionProperty: 'translate',
        translate: 'auto',
        _in: {
          y: 0
        },
        _out: {
          y: '-100%'
        },
        _hidden: {
          display: 'none'
        }
      },
      scale: {
        transitionProperty: 'scale',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1
        },
        _out: {
          scaleX: 0,
          scaleY: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'scale-x-from-left': {
        transitionProperty: 'scale',
        transformOrigin: 'left',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1
        },
        _out: {
          scaleX: 0,
          scaleY: 1
        },
        _hidden: {
          display: 'none'
        }
      },
      'scale-x-from-right': {
        transitionProperty: 'scale',
        transformOrigin: 'right',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1
        },
        _out: {
          scaleX: 0,
          scaleY: 1
        },
        _hidden: {
          display: 'none'
        }
      },
      'scale-y-from-top': {
        transitionProperty: 'scale',
        transformOrigin: 'top',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1
        },
        _out: {
          scaleX: 1,
          scaleY: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'scale-y-from-bottom': {
        transitionProperty: 'scale',
        transformOrigin: 'bottom',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1
        },
        _out: {
          scaleX: 1,
          scaleY: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      pop: {
        transitionProperty: 'opacity, scale',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1,
          opacity: 1
        },
        _out: {
          scaleX: 0.9,
          scaleY: 0.9,
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'pop-left-bottom': {
        transitionProperty: 'opacity, scale',
        transformOrigin: 'left bottom',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1,
          opacity: 1
        },
        _out: {
          scaleX: 0.9,
          scaleY: 0.9,
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'pop-left-top': {
        transitionProperty: 'opacity, scale',
        transformOrigin: 'left top',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1,
          opacity: 1
        },
        _out: {
          scaleX: 0.9,
          scaleY: 0.9,
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'pop-right-bottom': {
        transitionProperty: 'opacity, scale',
        transformOrigin: 'right bottom',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1,
          opacity: 1
        },
        _out: {
          scaleX: 0.9,
          scaleY: 0.9,
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'pop-right-top': {
        transitionProperty: 'opacity, scale',
        transformOrigin: 'right top',
        scale: 'auto',
        _in: {
          scaleX: 1,
          scaleY: 1,
          opacity: 1
        },
        _out: {
          scaleX: 0.9,
          scaleY: 0.9,
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      }
    }
  },
  defaultVariants: { variant: 'fade' }
})
