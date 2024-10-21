import { defineRecipe } from '@pandacss/dev'

export const buttonGroup = defineRecipe({
  className: 'nimbus-button-group',
  jsx: ['ButtonGroup', 'ToggleButtonGroup'],
  base: {
    display: 'flex'
  },
  variants: {
    orientation: {
      horizontal: {
        _orientationHorizontal: {
          flexDirection: 'row',
          _attached: {
            '& > button:not(:first-of-type, :last-of-type)': {
              borderRadius: '0px',
              marginInlineEnd: '-1px'
            },
            '& > button:first-of-type': {
              borderStartEndRadius: '0px',
              borderEndEndRadius: '0px',
              marginInlineEnd: '-1px'
            },
            '& > button:last-of-type': {
              borderStartStartRadius: '0px',
              borderEndStartRadius: '0px'
            }
          }
        }
      },
      vertical: {
        _orientationVertical: {
          flexDirection: 'column',
          _attached: {
            '& > button:not(:first-of-type, :last-of-type)': {
              borderRadius: '0px',
              marginBlockEnd: '-1px'
            },
            '& > button:first-of-type': {
              borderEndStartRadius: '0px',
              borderEndEndRadius: '0px',
              marginBlockEnd: '-1px'
            },
            '& > button:last-of-type': {
              borderStartStartRadius: '0px',
              borderStartEndRadius: '0px'
            }
          }
        }
      }
    }
  },
  defaultVariants: { orientation: 'horizontal' }
})
