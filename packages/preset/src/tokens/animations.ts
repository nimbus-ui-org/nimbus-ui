import { defineTokens } from '@pandacss/dev'

export const animations = defineTokens.animations({
  loading: {
    spinner: {
      value: 'loading-spinner 0.8s linear infinite',
      description: 'Animation for loading spinner'
    },
    bars: {
      value: 'loading-bars 1s linear infinite',
      description: 'Animation for loading bars'
    },
    dots: {
      value: 'loading-dots 1s linear infinite',
      description: 'Animation for loading dots'
    }
  },
  fade: {
    DEFAULT: {
      value: 'fade 300ms'
    },
    toRight: {
      value: 'fade-to-right 300ms'
    },
    toLeft: {
      value: 'fade-to-left 300ms'
    },
    toTop: {
      value: 'fade-to-top 300ms'
    },
    toBottom: {
      value: 'fade-to-bottom 300ms'
    }
  },
  slide: {
    toRight: {
      value: 'slide-to-right 300ms'
    },
    toLeft: {
      value: 'slide-to-left 300ms'
    },
    toTop: {
      value: 'slide-to-top 300ms'
    },
    toBottom: {
      value: 'slide-to-bottom 300ms'
    }
  },
  scale: {
    DEFAULT: {
      value: 'scale 300ms'
    },
    x: {
      value: 'scale-x 300ms'
    },
    y: {
      value: 'scale-y 300ms'
    }
  },
  pop: {
    DEFAULT: {
      value: 'pop 300ms'
    }
  }
})
