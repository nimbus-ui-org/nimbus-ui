import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'
import { loader } from './loader'

export const recipes: Record<string, RecipeConfig<RecipeVariantRecord>> = {
  loader
}
