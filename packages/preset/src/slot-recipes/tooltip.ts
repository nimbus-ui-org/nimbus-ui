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
      transitionProperty: 'opacity, translate',
      transitionDuration: 'fast',
      '&[data-placement="left"]': {
        _entering: {
          translate: '10% 0',
          opacity: 0
        },
        _exiting: {
          translate: '10% 0',
          opacity: 0
        }
      },
      '&[data-placement="right"]': {
        _entering: {
          translate: '-10% 0',
          opacity: 0
        },
        _exiting: {
          translate: '-10% 0',
          opacity: 0
        }
      },
      '&[data-placement="top"]': {
        _entering: {
          translate: '0 10%',
          opacity: 0
        },
        _exiting: {
          translate: '0 10%',
          opacity: 0
        }
      },
      '&[data-placement="bottom"]': {
        _entering: {
          translate: '0 -10%',
          opacity: 0
        },
        _exiting: {
          translate: '0 -10%',
          opacity: 0
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
