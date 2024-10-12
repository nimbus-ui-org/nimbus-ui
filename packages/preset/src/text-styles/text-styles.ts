import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: '5xl',
      fontWeight: 'bold',
      fontFamily: 'heading'
    }
  },
  h2: {
    value: {
      fontSize: '4xl',
      fontWeight: 'bold',
      fontFamily: 'heading'
    }
  },
  h3: {
    value: {
      fontSize: '3xl',
      fontWeight: 'bold',
      fontFamily: 'heading'
    }
  },
  h4: {
    value: {
      fontSize: 'xl',
      fontWeight: 'bold',
      fontFamily: 'heading'
    }
  },
  h5: {
    value: {
      fontSize: 'md',
      fontWeight: 'bold',
      fontFamily: 'heading'
    }
  },
  h6: {
    value: {
      fontSize: 'sm',
      fontWeight: 'bold',
      fontFamily: 'heading'
    }
  },
  quote: {
    value: {
      fontFamily: 'quote',
      fontSize: '1.18em',
      fontStyle: 'italic',
      letterSpacing: '-0.025em'
    }
  }
})
