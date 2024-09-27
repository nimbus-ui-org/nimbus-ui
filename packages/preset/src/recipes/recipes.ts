import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'
import { loader } from './loader'
import { buttonGroup } from './buttonGroup'

export const recipes: Record<string, RecipeConfig<RecipeVariantRecord>> = {
  loader,
  buttonGroup
}
