import pandaPreset from '@pandacss/preset-panda'

export type NimbusColorTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

export type NimbusColors =
  | Exclude<
      keyof typeof pandaPreset.theme.tokens.colors,
      'current' | 'black' | 'white' | 'transparent'
    >
  | (string & NonNullable<unknown>)

export type NimbusThemeColors = {
  [key in NimbusColors]?: NimbusColorTuple
}

export type NimbusRadius =
  | keyof typeof pandaPreset.theme.tokens.radii
  | (string & NonNullable<unknown>)

export interface NimbusPalettes {
  /**
   * Your brand color palette.
   * Defaults to `blue`.
   */
  primary?: NimbusColors

  /**
   * Base color palette. Used for backgrounds, typographies and contrast.
   * Defaults to `gray`.
   */
  base?: NimbusColors

  /**
   * Error color palette.
   * Defaults to `red`.
   */
  error?: NimbusColors

  /**
   * Other palettes you wish to include.
   * This is an object where each key represents a name you desire for the color palette and the value is the color name.
   *
   * Example:
   *
   * ```ts
   * other: {
   *  warning: 'yellow',
   *  success: 'green',
   *  purple: 'purple'
   * }
   * ```
   */
  other?: { [colorName: string]: NimbusColors }
}

export interface NimbusPresetConfig {
  /**
   * An Object where each key is a color name, and the value is an array of 11 color strings.
   * Color strings are either in **Hex**, **RGB**, or **HSL** format.
   *
   * **Note:** colors defined here are meant to be used in your palettes.
   * If none of your palettes use a color defined here they are automatically ignored.
   */
  colors?: NimbusThemeColors

  /**
   * Theme specific color palettes.
   * Values can only refer to predefined color names, or color names defined in `colors` property.
   */
  palettes?: NimbusPalettes

  /**
   * Alternative themes.
   * An object where each key represents the name of the theme, and the value is a `NimbusPalettes` object.
   */
  otherThemes?: { [themeName: string]: NimbusPalettes }

  /**
   * Font families. System fonts are used by default.
   */
  fontFamilies?: {
    /**
     * The main font family used by your theme.
     */
    default?: string[]

    /**
     * Font family used in Headings.
     */
    heading?: string[]

    /**
     * Font family used in elements that have monospace font.
     */
    mono?: string[]
  }

  /**
   * Default border radius value.
   * Can accept predefined border radius values or any css value.
   * Defaults to `md`.
   */
  radius?: NimbusRadius

  /**
   * Whether or not to respect motion preference from system settings.
   * If set to `true`, transitions will be disabled when system has reduced motion enabled.
   * Defaults to `false`.
   */
  respectMotionPreference?: boolean

  /**
   * The cursor style of interactive elements that don't have cursor styles natively (ex: `Button`).
   * Defaults to `pointer`.
   * - `default` – no additional cursor styles
   * - `pointer` – adds `pointer` cursor style
   */
  cursor?: 'default' | 'pointer'
}
