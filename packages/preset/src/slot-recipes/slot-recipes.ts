import type { SlotRecipeConfig } from '@pandacss/dev'
import { button } from './button'
import { toggleButton } from './toggle-button'
import { popover } from './popover'
import { dialogHeader } from './dialog-header'
import { modal } from './modal'
import { drawer } from './drawer'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  button,
  toggleButton,
  popover,
  dialogHeader,
  modal,
  drawer
}
