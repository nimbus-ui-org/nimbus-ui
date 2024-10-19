import type { SlotRecipeConfig } from '@pandacss/dev'
import { button } from './button'
import { toggleButton } from './toggle-button'
import { popover } from './popover'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  button,
  toggleButton,
  popover
}
