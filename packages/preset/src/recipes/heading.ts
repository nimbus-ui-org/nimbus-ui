import { defineRecipe } from '@pandacss/dev'

export const heading = defineRecipe({
  className: 'nimbus-heading',
  jsx: ['Heading'],
  base: {
    '&:is(h1)': {
      textStyle: 'h1'
    },
    '&:is(h2)': {
      textStyle: 'h2'
    },
    '&:is(h3)': {
      textStyle: 'h3'
    },
    '&:is(h4)': {
      textStyle: 'h4'
    },
    '&:is(h5)': {
      textStyle: 'h5'
    },
    '&:is(h6)': {
      textStyle: 'h6'
    }
  }
})
