import { defineSlotRecipe } from '@pandacss/dev'

export const modal = defineSlotRecipe({
  className: 'nimbus-modal',
  slots: ['root', 'overlay', 'inner'],
  jsx: ['Modal'],
  base: {
    root: {
      display: 'flex',
      position: 'relative',
      bgColor: 'base.bg.body',
      borderRadius: 'default',
      borderWidth: 'xs',
      borderColor: 'base.border',
      boxShadow: 'overlay',
      boxSizing: 'content-box',
      maxWidth: '100%',
      reducedMotion: 'preference!',
      transitionProperty: 'opacity, translate',
      transitionDuration: 'fast',
      _entering: {
        translate: '0 10%',
        opacity: 0
      },
      _exiting: {
        translate: '0 10%',
        opacity: 0
      }
    },
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '10000',
      width: 'screen',
      height: 'var(--visual-viewport-height)',
      background: 'base.bg.overlay',
      display: 'flex',
      justifyContent: 'center',
      paddingInline: '5vw',
      reducedMotion: 'preference!',
      transitionProperty: 'opacity',
      transitionDuration: 'fast',
      _entering: {
        opacity: 0
      },
      _exiting: {
        opacity: 0
      }
    }
  },
  variants: {
    scrollType: {
      inner: {
        root: {
          maxHeight: '100%'
        },
        inner: {
          maxHeight: '100%'
        },
        overlay: {
          alignItems: 'center',
          paddingTop: '5dvh',
          paddingBottom: '5dvh'
        }
      },
      outer: {
        overlay: {
          overflow: 'auto',
          alignItems: 'flex-start',
          paddingBlock: '20'
        }
      }
    },
    size: {
      xs: {
        inner: {
          width: '96'
        }
      },
      sm: {
        inner: {
          width: 'md'
        }
      },
      md: {
        inner: {
          width: 'lg'
        }
      },
      lg: {
        inner: {
          width: 'xl'
        }
      },
      xl: {
        inner: {
          width: '2xl'
        }
      },
      auto: {
        inner: {
          width: 'auto'
        }
      },
      full: {
        root: {
          flexGrow: 1
        },
        inner: {
          flexGrow: 1
        }
      },
      screen: {
        root: {
          flexGrow: 1,
          alignSelf: 'stretch',
          border: 'none',
          borderRadius: '0'
        },
        inner: {
          flexGrow: 1,
          alignSelf: 'stretch'
        },
        overlay: {
          padding: '0!',
          backgroundColor: 'transparent',
          transitionProperty: 'none'
        }
      }
    }
  },
  defaultVariants: { scrollType: 'outer' }
})
