import { forwardRef } from 'react'
import {
  dialog,
  overlayArrow,
  popover,
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
  type OverlayArrowProps,
  type PopoverRenderProps,
  type DialogProps
} from 'react-aria-components'
import { cx } from '@nimbus-ui/styled-system/css'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<PopoverRecipe>

  children?:
    | React.ReactNode
    | ((
        values: PopoverRenderProps & { close: () => void } & {
          defaultChildren: React.ReactNode | undefined
        }
      ) => React.ReactNode)

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
   * Props passed to arrow element.
   */
  arrowProps?: AriaProps<OverlayArrowProps>
}

export type PopoverProps = AriaProps<Omit<AriaPopoverProps, 'children'>> &
  PopoverVariantProps &
  Props

export const Popover = forwardRef((props: PopoverProps, ref: React.Ref<HTMLElement>) => {
  ;[props, ref] = useContextProps(props, ref, PopoverContext)

  const {
    children,
    className,
    classNames,
    withArrow = true,
    arrowProps,
    dialogProps,
    arrowSize = 12,
    offset = 8,
    isNonModal = true,
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
      isNonModal={isNonModal}
      offset={newOffset}
      className={styles.root}
      ref={ref}
      {...rest}
    >
      {(popoverRenderProps) => (
        <Dialog className={cx(dialog(), styles.dialog)} {...dialogProps}>
          {(dialogRenderProps) => (
            <>
              {withArrow && (
                <OverlayArrow
                  className={cx(overlayArrow(), styles.arrow)}
                  {...arrowProps}
                >
                  <svg width={arrowSize} height={arrowSize} viewBox="0 0 12 12">
                    <path d="M0 0 L6 6 L12 0" />
                  </svg>
                </OverlayArrow>
              )}

              {renderChildren(children, {
                ...popoverRenderProps,
                ...dialogRenderProps
              })}
            </>
          )}
        </Dialog>
      )}
    </AriaPopover>
  )
})

Popover.displayName = 'NimbusUI_Popover'
