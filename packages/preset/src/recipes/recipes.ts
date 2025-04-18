import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'
import { loader } from './loader'
import { buttonGroup } from './button-group'
import { iconButton } from './icon-button'
import { transition } from './transition'
import { paper } from './paper'
import { typography } from './typography'
import { kbd } from './kbd'
import { blockquote } from './blockquote'
import { code } from './code'
import { overlayArrow } from './overlay-arrow'
import { dialog } from './dialog'
import { separator } from './separator'

export const recipes: Record<string, RecipeConfig<RecipeVariantRecord>> = {
  loader,
  buttonGroup,
  iconButton,
  transition,
  paper,
  typography,
  kbd,
  blockquote,
  code,
  overlayArrow,
  dialog,
  separator
}
