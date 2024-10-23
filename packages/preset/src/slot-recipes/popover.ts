import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'nimbus-popover',
  slots: ['root', 'arrow', 'inner'],
  jsx: ['Popover'],
  base: {
    root: {
      maxWidth: '90%',
      reducedMotion: 'preference!',
      _entering: {
        animationName: 'fade',
        animationDuration: 'fast',

        // animating scale on popover affects offset so do it on the dialog
        '& > [data-dialog]': {
          animationName: 'popover-dialog',
          animationDuration: 'fast'
        }
      },
      _exiting: {
        animationName: 'fade',
        animationDuration: 'fast',
        animationDirection: 'reverse',

        // animating scale on popover affects offset so do it on the dialog
        '& > [data-dialog]': {
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
    inner: {
      position: 'relative',
      maxHeight: 'inherit',
      reducedMotion: 'preference!'
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
