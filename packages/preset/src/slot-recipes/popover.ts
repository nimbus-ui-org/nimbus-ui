import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'nimbus-popover',
  slots: ['root', 'arrow', 'wrapper', 'inner'],
  jsx: ['Popover'],
  base: {
    root: {
      maxWidth: '90vw',
      reducedMotion: 'preference!',
      _entering: {
        animationName: 'fade',
        animationDuration: 'fast',

        // animating scale on popover affects offset so do it on wrapper element
        '&[data-has-dialog] > [data-wrapper]': {
          animationName: 'popover-dialog',
          animationDuration: 'fast'
        }
      },
      _exiting: {
        animationName: 'fade',
        animationDuration: 'fast',
        animationDirection: 'reverse',

        // animating scale on popover affects offset so do it on wrapper element
        '&[data-has-dialog] > [data-wrapper]': {
          animationName: 'popover-dialog',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      }
    },
    arrow: {
      '& path': {
        stroke: 'base.border',
        strokeWidth: 'xs',
        vectorEffect: 'non-scaling-stroke'
      }
    },
    wrapper: {
      position: 'relative',
      maxHeight: 'inherit',
      reducedMotion: 'preference!',
      borderRadius: 'default',
      borderWidth: 'xs',
      borderColor: 'base.border',
      boxShadow: 'overlay',
      boxSizing: 'content-box'
    },
    inner: {
      maxHeight: 'inherit'
    }
  },
  variants: {
    variant: {
      plain: {
        wrapper: {
          bg: 'base.bg.paper'
        }
      },
      blurred: {
        wrapper: {
          bgColor: 'base.bg.paper.alpha',
          backdropFilter: 'auto',
          backdropBlur: 'lg'
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
      }
    }
  },
  defaultVariants: { variant: 'plain' }
})
