import { defineRecipe } from '@pandacss/dev'

export const blockquote = defineRecipe({
  className: 'nimbus-blockquote',
  jsx: ['Blockquote'],
  base: {
    padding: '0.75rem',
    paddingInlineStart: '2rem',
    borderInlineStartWidth: '0.4rem',
    color: 'colorPalette.text.highContrast',
    bgColor: 'colorPalette.ghost/85',
    borderRadius: 'default',
    colorPalette: 'primary'
  }
})
