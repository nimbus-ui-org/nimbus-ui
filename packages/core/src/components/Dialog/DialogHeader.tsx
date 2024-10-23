import { Heading } from '@components/Heading'
import { IconButton } from '@components/IconButton'
import { Separator } from '@components/Separator'
import { Close } from '@icons'
import { styled } from '@nimbus-ui/styled-system/jsx'
import {
  dialogHeader,
  type DialogHeaderRecipe,
  type DialogHeaderVariantProps
} from '@nimbus-ui/styled-system/recipes'
import type { ComponentProps } from '@nimbus-ui/styled-system/types'
import { useStyles, type SlotsClasses } from '@utils'
import React, { forwardRef, useContext } from 'react'
import { Header, OverlayTriggerStateContext } from 'react-aria-components'

interface Props {
  /**
   * An object to extend the styles of the component and its inner elements.
   *
   * **Note:** If the native `className` prop is used, the styles are passed to the `root` element.
   * Do not use `className` and `classNames` together for specificity issues.
   */
  classNames?: SlotsClasses<DialogHeaderRecipe>

  /**
   * If `true`, adds a close button.
   * @default true
   */
  withCloseButton?: boolean

  /**
   * If `true`, adds a separator.
   * If `scrollType` on parent modal is `'content'`, removes it.
   * @default true
   */
  withSeparator?: boolean

  /**
   * Element rendered before the children.
   */
  icon?: React.ReactNode

  /**
   * A custom close button instead of the default one.
   */
  customCloseButton?: React.ReactNode
}

const StyledDialogHeader = styled(Header)

type StyledDialogHeaderProps = ComponentProps<typeof StyledDialogHeader>

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type DialogHeaderProps = StyledDialogHeaderProps & DialogHeaderVariantProps & Props

export const DialogHeader = forwardRef(
  (
    {
      children,
      className,
      classNames,
      icon,
      withCloseButton = true,
      withSeparator = true,
      customCloseButton,
      ...props
    }: DialogHeaderProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const { styles, rest } = useStyles<
      typeof props,
      DialogHeaderVariantProps,
      DialogHeaderRecipe
    >({
      recipe: dialogHeader,
      props,
      className,
      classNames
    })

    const state = useContext(OverlayTriggerStateContext)

    return (
      <>
        <StyledDialogHeader
          className={styles.root}
          data-section="header"
          {...rest}
          ref={ref}
        >
          <Heading level={1} className={styles.heading}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.title}>{children}</span>
          </Heading>
          {withCloseButton &&
            (customCloseButton ? (
              <div className={styles.close}>{customCloseButton}</div>
            ) : (
              <IconButton
                className={styles.close}
                onPress={() => state.close()}
                size="sm"
                variant="subtle"
              >
                <Close />
              </IconButton>
            ))}
        </StyledDialogHeader>
        {withSeparator && <Separator className={styles.separator} />}
      </>
    )
  }
)

DialogHeader.displayName = 'NimbusUI_DialogHeader'
