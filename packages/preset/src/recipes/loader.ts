import { defineRecipe } from '@pandacss/dev'

export const loader = defineRecipe({
  className: 'nimbus-loader',
  jsx: ['Loader', 'Button'],
  base: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    color: 'primary',
    height: '9',
    aspectRatio: 'square',
    '& span': {
      bg: 'current'
    }
  },
  variants: {
    variant: {
      spinner: {
        '& span': {
          position: 'absolute',
          height: '30%',
          width: '15%',
          insetBlockStart: 0,
          insetInlineStart: 'calc(50% - 5%)',
          transformOrigin: '50% calc(100% + (2 / 3) * 100%)',
          borderRadius: 'xs',
          animation: 'loading.spinner'
        },
        '& span:nth-child(1)': {
          transform: 'rotate(0deg)',
          animationDelay: 'calc(-8/8 * 0.8s)'
        },
        '& span:nth-child(2)': {
          transform: 'rotate(45deg)',
          animationDelay: 'calc(-7/8 * 0.8s)'
        },
        '& span:nth-child(3)': {
          transform: 'rotate(90deg)',
          animationDelay: 'calc(-6/8 * 0.8s)'
        },
        '& span:nth-child(4)': {
          transform: 'rotate(135deg)',
          animationDelay: 'calc(-5/8 * 0.8s)'
        },
        '& span:nth-child(5)': {
          transform: 'rotate(180deg)',
          animationDelay: 'calc(-4/8 * 0.8s)'
        },
        '& span:nth-child(6)': {
          transform: 'rotate(225deg)',
          animationDelay: 'calc(-3/8 * 0.8s)'
        },
        '& span:nth-child(7)': {
          transform: 'rotate(270deg)',
          animationDelay: 'calc(-2/8 * 0.8s)'
        },
        '& span:nth-child(8)': {
          transform: 'rotate(315deg)',
          animationDelay: 'calc(-1/8 * 0.8s)'
        }
      },
      dots: {
        alignItems: 'center',
        '& span': {
          flex: '0 0 25%',
          height: '25%',
          borderRadius: '50%',
          animation: 'loading.dots'
        },
        '& span:nth-child(1)': {
          animationDelay: '-1s'
        },
        '& span:nth-child(2)': {
          animationDelay: '-0.8s'
        },
        '& span:nth-child(3)': {
          animationDelay: '-0.6s'
        }
      },
      bars: {
        '& span': {
          flex: '0 0 20%',
          borderRadius: 'xs',
          animation: 'loading.bars'
        },
        '& span:nth-child(1)': {
          animationDelay: '-1s'
        },
        '& span:nth-child(2)': {
          animationDelay: '-0.8s'
        },
        '& span:nth-child(3)': {
          animationDelay: '-0.6s'
        }
      }
    },
    size: {
      xs: {
        height: '4'
      },
      sm: {
        height: '5'
      },
      md: {
        height: '9'
      },
      lg: {
        height: '12'
      },
      xl: {
        height: '14'
      }
    }
  },
  defaultVariants: { variant: 'spinner' }
})
