import { definePattern } from '@pandacss/dev'
import type { SystemStyleObject } from '@nimbus-ui/styled-system/types'

const SBGrid = definePattern({
  description: 'A storybook grid',
  properties: {
    gap: { type: 'property', value: 'gap' },
    columnGap: { type: 'property', value: 'gap' },
    rowGap: { type: 'property', value: 'gap' },
    columns: { type: 'number' }
  },
  defaultValues: { gap: '20' },
  transform(props, { map }) {
    const { columnGap, rowGap, gap, columns, ...rest } = props as {
      gap: number
      columnGap: number
      rowGap: number
      columns: number
    }

    return {
      display: 'grid',
      justifyContent: 'start',
      alignItems: 'center',
      gridTemplateColumns:
        columns != null
          ? (map(columns, (v) => `repeat(${v}, minmax(0, auto))`) as string)
          : undefined,
      gap,
      columnGap,
      rowGap,
      ...rest
    } as SystemStyleObject
  }
})

export const patterns = {
  SBGrid
}
