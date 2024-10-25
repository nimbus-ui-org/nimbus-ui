import { forwardRef } from 'react'
import {
  dialog,
  modal,
  type DialogVariantProps,
  type ModalRecipe,
  type ModalVariantProps
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
  ModalContext
} from 'react-aria-components'
import { cx } from '@nimbus-ui/styled-system/css'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<ModalRecipe>

  /**
   * Props passed to dialog element.
   */
  dialogProps?: AriaProps<Omit<DialogProps, 'children'>>

  children?:
    | React.ReactNode
    | ((
        values: ModalRenderProps & { close: () => void } & {
          defaultChildren: React.ReactNode | undefined
        }
      ) => React.ReactNode)
}

export type ModalProps = AriaProps<Omit<AriaModalOverlayProps, 'children'>> &
  ModalVariantProps &
  DialogVariantProps &
  Props

export const Modal = forwardRef((props: ModalProps, ref: React.Ref<HTMLDivElement>) => {
  ;[props, ref] = useContextProps(props, ref, ModalContext)

  const { children, className, classNames, dialogProps, ...otherProps } = props

  const { styles, rest } = useStyles<typeof otherProps, ModalVariantProps, ModalRecipe>({
    recipe: modal,
    props: otherProps,
    className,
    classNames
  })

  return (
    <AriaModalOverlay className={styles.overlay} {...rest}>
      <AriaModal className={styles.root} ref={ref}>
        {(modalRenderProps) => (
          <Dialog
            className={cx(dialog({ scrollType: props.scrollType }), styles.inner)}
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

Modal.displayName = 'NimbusUI_Modal'
