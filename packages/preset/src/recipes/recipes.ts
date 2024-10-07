import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'
import { loader } from './loader'
import { buttonGroup } from './button-group'
import { iconButton } from './icon-button'
import { transition } from './transition'

export const recipes: Record<string, RecipeConfig<RecipeVariantRecord>> = {
  loader,
  buttonGroup,
  iconButton,
  transition
}
