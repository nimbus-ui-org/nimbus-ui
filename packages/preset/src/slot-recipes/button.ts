import { defineSlotRecipe } from '@pandacss/dev'

export const button = defineSlotRecipe({
  className: 'nimbus-button',
  slots: ['root', 'section', 'loader', 'label'],
  jsx: ['Button'],
  base: {
    root: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      userSelect: 'none',
      lineHeight: 'none',
      fontWeight: 'semibold',
      borderRadius: 'default',
      outline: 'none',
      cursorType: 'preference',
      reducedMotion: 'preference',
      bg: 'primary.solid',
      color: 'primary.solid.text',

      // hide children when loading
      _loading: {
        '& > span': {
          visibility: 'hidden'
        },
        cursor: 'not-allowed'
      },

      // reveal loader
      '& > span': {
        _loading: {
          visibility: 'visible'
        }
      },

      _dataAppearanceDisabled: {
        bg: 'base.disabled',
        color: 'base.disabled.text'
      },
      _dataFocusRing: {
        outline: 'sm',
        outlineColor: 'black'
      }
    },
    section: {
      display: 'flex',
      alignItems: 'center',
      visibility: 'visible',
      _sectionStart: {
        marginInlineEnd: '2'
      },
      _sectionEnd: {
        marginInlineStart: '2'
      }
    },
    label: {
      textAlign: 'center',
      whiteSpace: 'nowrap',
      visibility: 'visible'
    },
    loader: {
      position: 'absolute',
      insetBlockStart: '50%',
      insetInlineStart: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'inherit',
      height: '55%'
    }
  },
  variants: {
    variant: {
      solid: {
        root: {}
      }
    },
    size: {
      md: {
        root: {
          fontSize: 'md',
          height: '10',
          px: '4'
        }
      }
    }
  },
  defaultVariants: { variant: 'solid', size: 'md' }
})
