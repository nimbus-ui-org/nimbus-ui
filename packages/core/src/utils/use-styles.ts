import { useMemo } from 'react'
import { cx } from '@nimbus-ui/styled-system/css'
import type { SlotsClasses } from './types'

type Recipe<Props extends object, Variants extends Props> = {
  (props?: Props): Record<string, string>
  splitVariantProps: (props: object) => [Variants, Omit<Props, keyof Variants>]
}

interface SlotStyles<
  Props extends object,
  Variants extends Props,
  R extends Recipe<Props, Variants>
> {
  recipe: R
  props: Props
  className?: string
  classNames?: Record<string, string>
}

export const useStyles = <
  Props extends object,
  Variants extends Props,
  R extends Recipe<Props, Variants>
>({
  recipe,
  props,
  className,
  classNames
}: SlotStyles<Props, Variants, R>) => {
  const [variants, rest] = useMemo(() => recipe.splitVariantProps(props), [props, recipe])

  const classes = useMemo(() => recipe(variants), [recipe, variants])

  const styles = useMemo(
    () =>
      Object.keys(classes).reduce((prevClasses, currentClass) => {
        let currentClassStyles = cx(classes[currentClass], classNames?.[currentClass])

        if (currentClass === 'root') {
          currentClassStyles = cx(classes.root, classNames?.root, className)
        }

        return {
          ...prevClasses,
          [currentClass]: currentClassStyles
        }
      }, {}),
    [className, classNames, classes]
  )

  return {
    styles: styles as SlotsClasses<R>,
    rest
  }
}
