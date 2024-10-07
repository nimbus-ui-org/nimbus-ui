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
  }
})
