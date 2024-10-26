import { defineSlotRecipe } from '@pandacss/dev'

export const drawer = defineSlotRecipe({
  className: 'nimbus-drawer',
  slots: ['root', 'overlay', 'inner'],
  jsx: ['Drawer'],
  base: {
    root: {
      display: 'flex',
      position: 'relative',
      bgColor: 'base.bg.body',
      borderColor: 'base.border',
      boxShadow: 'overlay',
      boxSizing: 'content-box',
      maxWidth: '100%',
      maxHeight: '100%',
      flexGrow: '0',
      flexShrink: '0',
      margin: 'var(--container-padding)',
      reducedMotion: 'preference!',
      animationDuration: 'fast',
      '&[data-placement="left"]': {
        borderRightWidth: 'xs',
        _entering: {
          animationName: 'slide-to-right',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'slide-to-right',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      },
      '&[data-placement="right"]': {
        borderLeftWidth: 'xs',
        _entering: {
          animationName: 'slide-to-left',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'slide-to-left',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      },
      '&[data-placement="top"]': {
        borderBottomWidth: 'xs',
        _entering: {
          animationName: 'slide-to-bottom',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'slide-to-bottom',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      },
      '&[data-placement="bottom"]': {
        borderToWidth: 'xs',
        _entering: {
          animationName: 'slide-to-top',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'slide-to-top',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
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
      reducedMotion: 'preference!',
      _entering: {
        animationName: 'fade',
        animationDuration: 'fast'
      },
      _exiting: {
        animationName: 'fade',
        animationDuration: 'fast',
        animationDirection: 'reverse'
      },
      '&[data-placement="left"]': {
        justifyContent: 'left'
      },
      '&[data-placement="right"]': {
        justifyContent: 'right'
      },
      '&[data-placement="top"]': {
        flexDirection: 'column',
        justifyContent: 'flex-start'
      },
      '&[data-placement="bottom"]': {
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }
    },
    inner: {
      width: 'full'
    }
  },
  variants: {
    scrollType: {
      inner: {
        inner: {
          maxHeight: '100%'
        }
      },
      outer: {}
    },
    size: {
      xs: {
        root: {
          flexBasis: '96'
        }
      },
      sm: {
        root: {
          flexBasis: 'md'
        }
      },
      md: {
        root: {
          flexBasis: 'lg'
        }
      },
      lg: {
        root: {
          flexBasis: 'xl'
        }
      },
      xl: {
        root: {
          flexBasis: '2xl'
        }
      },
      auto: {
        root: {
          flexBasis: 'auto'
        }
      },
      screen: {
        root: {
          flexBasis: 'full'
        }
      }
    }
  },
  defaultVariants: { scrollType: 'outer' }
})
