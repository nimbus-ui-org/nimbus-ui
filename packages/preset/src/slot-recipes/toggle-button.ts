import { defineSlotRecipe } from '@pandacss/dev'

export const toggleButton = defineSlotRecipe({
  className: 'nimbus-toggle-button',
  slots: ['root', 'section', 'label'],
  jsx: ['ToggleButton'],
  base: {
    root: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      userSelect: 'none',
      lineHeight: 'none',
      fontWeight: 'semibold',
      borderRadius: 'default',
      colorPalette: 'base',
      transition: 'colors',
      outline: 'none',
      cursorType: 'preference',
      reducedMotion: 'preference',

      _dataDisabled: {
        cursor: 'not-allowed'
      },
      _dataFocusRing: {
        outline: 'sm',
        outlineOffset: '0.5',
        outlineColor: 'colorPalette.border.active'
      }
    },
    section: {
      display: 'flex',
      alignItems: 'center',
      visibility: 'visible',
      _sectionStart: {
        marginInlineEnd: '2.5'
      },
      _sectionEnd: {
        marginInlineStart: '2.5'
      }
    },
    label: {
      textAlign: 'center',
      whiteSpace: 'nowrap',
      visibility: 'visible'
    }
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: 'xs',
          bg: 'base.outline',
          color: 'base.outline.text',
          _selected: {
            borderColor: 'transparent',
            bg: 'colorPalette.solid',
            color: 'colorPalette.solid.text'
          },
          borderColor: 'base.outline.border',
          _dataHovered: {
            bg: 'base.outline.hover',
            borderColor: 'base.border.hover',
            _selected: {
              borderColor: 'transparent',
              bg: 'colorPalette.solid.active'
            }
          },
          _dataPressed: {
            bg: 'base.outline.active',
            borderColor: 'base.border.active',
            _selected: {
              borderColor: 'transparent',
              bg: 'colorPalette.solid.active'
            }
          },
          _appearanceDisabled: {
            color: 'base.disabled.text',
            borderColor: 'base.disabled.border',
            _selected: {
              borderColor: 'transparent',
              bg: 'colorPalette.disabled'
            }
          }
        }
      },
      ghost: {
        root: {
          bg: 'base.ghost',
          color: 'base.ghost.text',
          _selected: {
            bg: 'colorPalette.solid',
            color: 'colorPalette.solid.text'
          },
          _dataHovered: {
            bg: 'base.ghost.hover',
            _selected: {
              bg: 'colorPalette.solid.active'
            }
          },
          _dataPressed: {
            bg: 'base.ghost.active',
            _selected: {
              bg: 'colorPalette.solid.active'
            }
          },
          _appearanceDisabled: {
            bg: 'transparent',
            color: 'base.disabled.text',
            _selected: {
              bg: 'base.disabled'
            }
          }
        }
      }
    },
    size: {
      xs: {
        root: {
          fontSize: 'xs',
          height: '6',
          px: '2'
        }
      },
      sm: {
        root: {
          fontSize: 'sm',
          height: '8',
          px: '3'
        }
      },
      md: {
        root: {
          fontSize: 'md',
          height: '10',
          px: '4'
        }
      },
      lg: {
        root: {
          fontSize: 'lg',
          height: '12',
          px: '6'
        }
      },
      xl: {
        root: {
          fontSize: 'xl',
          height: '14',
          px: '8'
        }
      }
    }
  },
  defaultVariants: { variant: 'ghost', size: 'md' }
})
