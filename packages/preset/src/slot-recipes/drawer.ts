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
      transitionProperty: 'translate',
      transitionDuration: 'fast',
      '&[data-placement="left"]': {
        borderRightWidth: 'xs',
        _entering: {
          translate: '-100% 0'
        },
        _exiting: {
          translate: '-100% 0'
        }
      },
      '&[data-placement="right"]': {
        borderLeftWidth: 'xs',
        _entering: {
          translate: '100% 0'
        },
        _exiting: {
          translate: '100% 0'
        }
      },
      '&[data-placement="top"]': {
        borderBottomWidth: 'xs',
        _entering: {
          translate: '0 -100%'
        },
        _exiting: {
          translate: '0 -100%'
        }
      },
      '&[data-placement="bottom"]': {
        borderToWidth: 'xs',
        _entering: {
          translate: '0 100%'
        },
        _exiting: {
          translate: '0 100%'
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
      transitionProperty: 'opacity',
      transitionDuration: 'fast',
      _entering: {
        opacity: 0
      },
      _exiting: {
        opacity: 0
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
