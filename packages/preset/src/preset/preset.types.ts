import pandaPreset from '@pandacss/preset-panda'

type NimbusRadius =
  | keyof typeof pandaPreset.theme.tokens.radii
  | (string & NonNullable<unknown>)

export type NimbusPalette = { light: string; dark: string }

export interface NimbusPalettes {
  /**
   * Your brand color palette - `Hex | RGB | HSL`.
   *
   * Defaults to `NimbusColors.Primary.Blue`.
   */
  primary?: string | NimbusPalette

  /**
   * Base color palette. Used for backgrounds, typographies and contrast - `Hex | RGB | HSL`.
   *
   * Defaults to `NimbusColors.Base.Gray`.
   *
   * **Note:** You can use also use any bright color value.
   * Nimbus will convert it to a **Base** palette based on the value provided.
   */
  base?: string | NimbusPalette

  /**
   * Error color palette - `Hex | RGB | HSL`.
   *
   * Defaults to `NimbusColors.Error.Red`.
   */
  error?: string | NimbusPalette

  /**
   * Other palettes you wish to include.
   * This is an object where each key represents a name you desire for the color palette and the value is the color.
   *
   * Example:
   *
   * ```ts
   * other: {
   *  warning: NimbusColors.Primary.Amber,
   *  success: '#16a34a',
   * }
   * ```
   */
  other?: { [colorName: string]: string | NimbusPalette }
}

export interface NimbusPresetConfig {
  /**
   * Theme specific color palettes.
   * Values are either in **Hex**, **RGB**, or **HSL** format.
   *
   * You can use predefined Nimbus Colors, for example:
   *
   * ```ts
   * palettes: {
   *  primary: NimbusColors.Primary.Dark,
   * }
   * ```
   *
   * You can also specify light and dark versions:
   *
   * ```ts
   * palettes: {
   *  primary: {
   *    light: NimbusColors.Primary.Yellow,
   *    dark: "#FFDD33"
   *  },
   * }
   * ```
   */
  palettes?: NimbusPalettes

  /**
   * Alternative themes.
   * An object where each key represents the name of the theme, and the value is a `NimbusPalettes` object.
   */
  otherThemes?: OtherThemes

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
   * Default border radius.
   * Can accept `radii` token values.
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

export interface FlattenedPalettes {
  primary: string | NimbusPalette
  base: string | NimbusPalette
  error: string | NimbusPalette
  [colorName: string]: string | NimbusPalette
}

export interface OtherThemes {
  [themeName: string]: NimbusPalettes
}
