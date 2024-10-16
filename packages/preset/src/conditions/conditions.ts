export const conditions = {
  hover: ['@media (hover: hover) and (pointer: fine)', '&:hover'],
  dataHovered: '&[data-hovered]',
  dataPressed: '&[data-pressed]',
  dataFocusRing: '&[data-focus-visible]',
  dataDisabled: '&[data-disabled]',
  appearanceDisabled: '&[data-appearance-disabled]',
  attached: '&[data-attached]',
  sectionStart: '&[data-section=start]',
  sectionEnd: '&[data-section=end]',
  entering: '&[data-entering]',
  exiting: '&[data-exiting]',
  in: '&[data-in]',
  out: '&[data-out]',
  hidden: '&:is([data-hidden], [aria-hidden=true])',
  pressed: '&[data-pressed]'
}
