import { defineRecipe } from '@pandacss/dev'

export const overlayArrow = defineRecipe({
  className: 'nimbus-overlay-arrow',
  jsx: ['OverlayArrow'],
  base: {
    '& svg': {
      display: 'block',
      fill: 'base.bg.paper'
    },
    '&[data-placement=bottom]': {
      '& svg': {
        rotate: '180deg'
      }
    },
    '&[data-placement=right]': {
      '& svg': {
        rotate: '90deg'
      }
    },
    '&[data-placement=left]': {
      '& svg': {
        rotate: '-90deg'
      }
    }
  }
})
