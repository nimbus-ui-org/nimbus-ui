import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'nimbus-popover',
  slots: ['root', 'arrow', 'dialog'],
  jsx: ['Popover'],
  base: {
    root: {
      reducedMotion: 'preference!',
      _entering: {
        animationName: 'fade',
        animationDuration: 'fast',

        '& > section': {
          animationName: 'popover-dialog',
          animationDuration: 'fast'
        }
      },
      _exiting: {
        animationName: 'fade',
        animationDuration: 'fast',
        animationDirection: 'reverse',

        '& > section': {
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
    dialog: {
      position: 'relative',
      reducedMotion: 'preference!'
    }
  },
  variants: {
    variant: {
      plain: {
        dialog: {
          bgColor: 'base.bg.paper'
        }
      },
      blurred: {
        dialog: {
          bgColor: 'base.bg.paper.alpha',
          backdropFilter: 'auto',
          backdropBlur: 'lg'
        }
      }
    }
  },
  defaultVariants: { variant: 'plain' }
})
