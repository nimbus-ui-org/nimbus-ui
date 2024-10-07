import { defineRecipe } from '@pandacss/dev'

export const transition = defineRecipe({
  className: 'nimbus-transition',
  jsx: ['Transition'],
  base: {
    reducedMotion: 'preference!'
  },
  variants: {
    variant: {
      fade: {
        transitionProperty: 'opacity',
        _in: {
          opacity: 1
        },
        _out: {
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      },
      'fade-to-right': {
        transitionProperty: 'opacity, translate',
        translate: 'auto',
        _in: {
          x: 0,
          opacity: 1
        },
        _out: {
          x: '-10%',
          opacity: 0
        },
        _hidden: {
          display: 'none'
        }
      }
    }
  },
  defaultVariants: { variant: 'fade' }
})
