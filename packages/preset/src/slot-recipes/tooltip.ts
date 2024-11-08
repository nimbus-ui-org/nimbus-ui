import { rem } from '@nimbus-ui/shared'
import { defineSlotRecipe } from '@pandacss/dev'

export const tooltip = defineSlotRecipe({
  className: 'nimbus-tooltip',
  slots: ['root', 'arrow'],
  jsx: ['Tooltip'],
  base: {
    root: {
      maxWidth: '90vw',
      bgColor: 'base.text.highContrast',
      color: 'base.bg.body',
      padding: `${rem(4)} ${rem(8)}`,
      fontSize: 'xs',
      reducedMotion: 'preference!',
      borderRadius: 'default',
      '&[data-placement="left"]': {
        _entering: {
          animationName: 'fade-to-left',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'fade-to-left',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      },
      '&[data-placement="right"]': {
        _entering: {
          animationName: 'fade-to-right',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'fade-to-right',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      },
      '&[data-placement="top"]': {
        _entering: {
          animationName: 'fade-to-top',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'fade-to-top',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      },
      '&[data-placement="bottom"]': {
        _entering: {
          animationName: 'fade-to-bottom',
          animationDuration: 'fast'
        },
        _exiting: {
          animationName: 'fade-to-bottom',
          animationDuration: 'fast',
          animationDirection: 'reverse'
        }
      }
    },
    arrow: {
      '& svg': {
        fill: 'base.text.highContrast'
      }
    }
  }
})
