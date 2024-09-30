import type { SlotRecipeConfig } from '@pandacss/dev'
import { button } from './button'
import { toggleButton } from './toggle-button'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  button,
  toggleButton
}
