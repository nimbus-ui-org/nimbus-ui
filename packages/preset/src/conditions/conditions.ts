export const conditions = {
  hover: ['@media (hover: hover) and (pointer: fine)', '&:hover'],
  dataHovered: '&[data-hovered]',
  dataPressed: '&[data-pressed]',
  dataFocusRing: '&[data-focus-visible]',
  dataDisabled: '&[data-disabled]',
  hidden: '&:is([hidden], [data-hidden], [aria-hidden=true])',
  appearanceDisabled: '&[data-appearance-disabled]',
  attached: '&[data-attached]',
  sectionStart: '&[data-section=start]',
  sectionEnd: '&[data-section=end]',
  entering: '&[data-entering]',
  exiting: '&[data-exiting]',
  in: '&[data-in]',
  out: '&[data-out]',
  orientationVertical: '&:is([data-orientation=vertical], [aria-orientation=vertical])',
  orientationHorizontal:
    '&:is([data-orientation=horizontal], [aria-orientation=horizontal])',
  pressed: '&[data-pressed]'
}
