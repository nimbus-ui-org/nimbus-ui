import { defineRecipe } from '@pandacss/dev'

export const kbd = defineRecipe({
  className: 'nimbus-kbd',
  jsx: ['Kbd'],
  base: {
    fontSize: '0.8em',
    fontFamily: 'mono',
    borderColor: 'base.border',
    borderRadius: 'sm',
    borderWidth: '0.115em 0.115em 0.3em',
    paddingInline: '0.3em',
    paddingBlock: '0.2em'
  }
})
