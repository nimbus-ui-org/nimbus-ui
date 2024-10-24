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
      maxHeight: 'inherit',
      borderRadius: 'inherit',
      overflow: 'auto'
    }
  },
  variants: {
    variant: {
      plain: {
        inner: {
          bgColor: 'base.bg.paper'
        }
      },
      blurred: {
        inner: {
          bgColor: 'base.bg.paper.alpha',
          backdropFilter: 'auto',
          backdropBlur: 'lg'
        }
      }
    }
  },
  defaultVariants: { variant: 'plain' }
})
