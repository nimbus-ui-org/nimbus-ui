import { forwardRef } from 'react'
import {
  overlayArrow,
  tooltip,
  type PopoverRecipe,
  type TooltipRecipe,
  type TooltipVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { renderChildren, useStyles, type AriaProps, type SlotsClasses } from '@utils'
import {
  useContextProps,
  TooltipContext,
  Tooltip as AriaTooltip,
  OverlayArrow,
  type TooltipProps as AriaTooltipProps
} from 'react-aria-components'
import { cx } from '@nimbus-ui/styled-system/css'
import { Arrow } from '@icons'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<PopoverRecipe>

  /**
   * If `true` renders an arrow before the popover.
   * @default true
   * */
  withArrow?: boolean

  /**
   * Arrow size in **px**.
   * @default 8
   */
  arrowSize?: number
}

export type TooltipProps = AriaProps<AriaTooltipProps> & TooltipVariantProps & Props

export const Tooltip = forwardRef(
  (props: TooltipProps, ref: React.Ref<HTMLDivElement>) => {
    ;[props, ref] = useContextProps(props, ref, TooltipContext)

    const {
      children,
      className,
      classNames,
      withArrow = true,
      arrowSize = 8,
      offset = 5,
      ...otherProps
    } = props

    const { styles, rest } = useStyles<
      typeof otherProps,
      TooltipVariantProps,
      TooltipRecipe
    >({
      recipe: tooltip,
      props: otherProps,
      className,
      classNames
    })

    const newOffset = offset + (withArrow ? arrowSize / 2 : 0)

    return (
      <AriaTooltip offset={newOffset} className={styles.root} ref={ref} {...rest}>
        {(tooltipRenderProps) => (
          <>
            {withArrow && (
              <OverlayArrow className={cx(overlayArrow(), styles.arrow)}>
                <Arrow width={arrowSize} height={arrowSize} />
              </OverlayArrow>
            )}
            {renderChildren(children, tooltipRenderProps)}
          </>
        )}
      </AriaTooltip>
    )
  }
)

Tooltip.displayName = 'NimbusUI_Tooltip'
