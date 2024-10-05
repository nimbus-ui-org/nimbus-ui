import { defineRecipe } from '@pandacss/dev'

export const loader = defineRecipe({
  className: 'nimbus-loader',
  jsx: ['Loader'],
  base: {
    display: 'flex',
    position: 'relative',
    height: '9',
    maxHeight: 'full',
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
          insetInlineStart: 'calc(50% - 7.5%)',
          transformOrigin: '50% calc(100% + (2 / 3) * 100%)',
          borderRadius: '50%',
          animation: 'loading.spinner'
        },
        '& span:nth-child(1)': {
          rotate: '0deg',
          animationDelay: 'calc(-8/8 * 0.8s)'
        },
        '& span:nth-child(2)': {
          rotate: '45deg',
          animationDelay: 'calc(-7/8 * 0.8s)'
        },
        '& span:nth-child(3)': {
          rotate: '90deg',
          animationDelay: 'calc(-6/8 * 0.8s)'
        },
        '& span:nth-child(4)': {
          rotate: '135deg',
          animationDelay: 'calc(-5/8 * 0.8s)'
        },
        '& span:nth-child(5)': {
          rotate: '180deg',
          animationDelay: 'calc(-4/8 * 0.8s)'
        },
        '& span:nth-child(6)': {
          rotate: '225deg',
          animationDelay: 'calc(-3/8 * 0.8s)'
        },
        '& span:nth-child(7)': {
          rotate: '270deg',
          animationDelay: 'calc(-2/8 * 0.8s)'
        },
        '& span:nth-child(8)': {
          rotate: '315deg',
          animationDelay: 'calc(-1/8 * 0.8s)'
        }
      },
      dots: {
        alignItems: 'center',
        justifyContent: 'space-between',
        '& span': {
          height: '25%',
          aspectRatio: '1',
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
        gap: '20%',
        '& span': {
          flex: '1',
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
