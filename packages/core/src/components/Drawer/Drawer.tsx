import { forwardRef } from 'react'
import {
  dialog,
  drawer,
  type DialogVariantProps,
  type DrawerRecipe,
  type DrawerVariantProps
} from '@nimbus-ui/styled-system/recipes'
import { renderChildren, useStyles, type AriaProps, type SlotsClasses } from '@utils'
import {
  useContextProps,
  Dialog,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
  type DialogProps,
  type ModalRenderProps,
  ModalContext,
  useLocale
} from 'react-aria-components'
import { cx } from '@nimbus-ui/styled-system/css'
import { rem } from '@nimbus-ui/shared'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<DrawerRecipe>

  /**
   * Props passed to dialog element.
   */
  dialogProps?: AriaProps<Omit<DialogProps, 'children'>>

  /**
   * Placement of the drawer.
   */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'

  /**
   * Padding that should be applied between the element and the edge of the viewport.
   */
  containerPadding?: number

  /**
   * Spacing between elements.
   * @default 16.
   */
  gutter?: number

  children?:
    | React.ReactNode
    | ((
        values: ModalRenderProps & { close: () => void } & {
          defaultChildren: React.ReactNode | undefined
        }
      ) => React.ReactNode)
}

export type DrawerProps = AriaProps<Omit<AriaModalOverlayProps, 'children'>> &
  DrawerVariantProps &
  DialogVariantProps &
  Props

export const Drawer = forwardRef((props: DrawerProps, ref: React.Ref<HTMLDivElement>) => {
  ;[props, ref] = useContextProps(props, ref, ModalContext)

  const {
    children,
    className,
    classNames,
    dialogProps,
    placement = 'start',
    containerPadding,
    gutter,
    ...otherProps
  } = props

  const { styles, rest } = useStyles<typeof otherProps, DrawerVariantProps, DrawerRecipe>(
    {
      recipe: drawer,
      props: otherProps,
      className,
      classNames
    }
  )

  const { direction } = useLocale()

  let position = placement

  if (placement === 'start') {
    if (direction === 'ltr') {
      position = 'left'
    } else {
      position = 'right'
    }
  }

  if (placement === 'end') {
    if (direction === 'ltr') {
      position = 'right'
    } else {
      position = 'left'
    }
  }

  return (
    <AriaModalOverlay data-placement={position} className={styles.overlay} {...rest}>
      <AriaModal
        className={styles.root}
        data-placement={position}
        style={
          {
            '--container-padding': containerPadding ? rem(containerPadding) : undefined
          } as React.CSSProperties
        }
        ref={ref}
      >
        {(modalRenderProps) => (
          <Dialog
            className={cx(dialog({ scrollType: props.scrollType }), styles.inner)}
            style={
              {
                '--dialog-gutter': typeof gutter === 'number' && rem(gutter)
              } as React.CSSProperties
            }
            {...dialogProps}
          >
            {(dialogRenderProps) =>
              renderChildren(children, {
                ...modalRenderProps,
                ...dialogRenderProps
              })
            }
          </Dialog>
        )}
      </AriaModal>
    </AriaModalOverlay>
  )
})

Drawer.displayName = 'NimbusUI_Drawer'
