import { forwardRef } from 'react'
import {
  dialog,
  overlayArrow,
  popover,
  type DialogVariantProps,
  type PopoverRecipe,
  type PopoverVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { renderChildren, useStyles, type AriaProps, type SlotsClasses } from '@utils'
import {
  useContextProps,
  PopoverContext,
  Popover as AriaPopover,
  OverlayArrow,
  Dialog,
  type PopoverProps as AriaPopoverProps,
  type PopoverRenderProps,
  type DialogProps
} from 'react-aria-components'
import { cx } from '@nimbus-ui/styled-system/css'
import { Arrow } from '@icons'
import { rem } from '@nimbus-ui/shared'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<PopoverRecipe>

  /**
   * Props passed to dialog element.
   */
  dialogProps?: AriaProps<Omit<DialogProps, 'children'>>

  /**
   * If `true` renders an arrow before the popover.
   * @default true
   * */
  withArrow?: boolean

  /**
   * Arrow size in **px**.
   * @default 12
   */
  arrowSize?: number

  /**
   * Spacing between elements.
   * @default 16.
   */
  gutter?: number

  children?:
    | React.ReactNode
    | ((
        values: PopoverRenderProps & { close: () => void } & {
          defaultChildren: React.ReactNode | undefined
        }
      ) => React.ReactNode)
}

export type PopoverProps = AriaProps<Omit<AriaPopoverProps, 'children'>> &
  PopoverVariantProps &
  DialogVariantProps &
  Props

export const Popover = forwardRef((props: PopoverProps, ref: React.Ref<HTMLElement>) => {
  ;[props, ref] = useContextProps(props, ref, PopoverContext)

  const {
    children,
    className,
    classNames,
    withArrow = true,
    dialogProps,
    arrowSize = 12,
    offset = 8,
    isNonModal = true,
    scrollType,
    gutter,
    ...otherProps
  } = props

  const { styles, rest } = useStyles<
    typeof otherProps,
    PopoverVariantProps,
    PopoverRecipe
  >({
    recipe: popover,
    props: otherProps,
    className,
    classNames
  })

  const newOffset = offset + (withArrow ? arrowSize / 2 : 0)

  return (
    <AriaPopover
      data-has-dialog
      isNonModal={isNonModal}
      offset={newOffset}
      className={styles.root}
      ref={ref}
      {...rest}
    >
      {(popoverRenderProps) => (
        <div data-wrapper className={styles.wrapper}>
          {withArrow && (
            <OverlayArrow className={cx(overlayArrow(), styles.arrow)}>
              <Arrow width={arrowSize} height={arrowSize} />
            </OverlayArrow>
          )}
          <Dialog
            className={cx(dialog({ scrollType }), styles.inner)}
            style={
              {
                '--dialog-gutter': typeof gutter === 'number' && rem(gutter)
              } as React.CSSProperties
            }
            {...dialogProps}
          >
            {(dialogRenderProps) =>
              renderChildren(children, {
                ...popoverRenderProps,
                ...dialogRenderProps
              })
            }
          </Dialog>
        </div>
      )}
    </AriaPopover>
  )
})

Popover.displayName = 'NimbusUI_Popover'
