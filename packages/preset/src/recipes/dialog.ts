import { defineRecipe } from '@pandacss/dev'

export const dialog = defineRecipe({
  className: 'nimbus-dialog',
  jsx: ['Dialog'],
  base: {
    padding: '6',
    outline: 'none',
    borderRadius: 'default',
    borderWidth: 'xs',
    borderColor: 'base.border',
    boxShadow: 'overlay',
    bgColor: 'base.bg.body'
  }
})
