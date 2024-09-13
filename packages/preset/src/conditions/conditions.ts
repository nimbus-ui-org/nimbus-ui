export const conditions = {
  hover: ['@media (hover: hover) and (pointer: fine)', '&:is(:hover, [data-hovered])'],
  hovered: '&:is([data-hovered])',
  pressed: '&:is([data-pressed], [aria-pressed])'
}
