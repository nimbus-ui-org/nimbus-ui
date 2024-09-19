import { defineSlotRecipe } from '@pandacss/dev'

export const button = defineSlotRecipe({
  className: 'nimbus-button',
  slots: ['root', 'section', 'loader', 'label'],
  jsx: ['Button'],
  base: {
    root: { fontSize: 'lg' }
  },
  variants: {
    variant: {
      solid: {
        root: {
          fontSize: 'lg'
        }
      }
    }
  },
  defaultVariants: { variant: 'solid' }
})
