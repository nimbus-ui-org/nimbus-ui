export interface NimbusPresetConfig {
  /**
   * The cursor style of interactive elements that don't have cursor styles by default (ex: `Button`)
   * - `default` – default cursor style
   * - `pointer` – adds `pointer` style to these elements
   */
  cursor?: 'default' | 'pointer'
}
