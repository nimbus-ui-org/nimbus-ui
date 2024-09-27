import { defineSlotRecipe } from '@pandacss/dev'

export const button = defineSlotRecipe({
  className: 'nimbus-button',
  slots: ['root', 'section', 'loader', 'label'],
  jsx: ['Button', 'IconButton'],
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
      colorPalette: 'primary',
      transition: 'colors',
      outline: 'none',
      cursorType: 'preference',
      reducedMotion: 'preference',

      // hide children when loading
      _loading: {
        '& > span': {
          visibility: 'hidden'
        }
      },

      // reveal loader
      '& > span': {
        _loading: {
          visibility: 'visible'
        }
      },

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
    },
    loader: {
      alignContent: 'center',
      position: 'absolute',
      insetBlockStart: '50%',
      insetInlineStart: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'inherit'
    }
  },
  variants: {
    variant: {
      solid: {
        root: {
          bg: 'colorPalette.solid',
          color: 'colorPalette.solid.text',
          _dataHovered: {
            bg: 'colorPalette.solid.hover'
          },
          _dataPressed: {
            bg: 'colorPalette.solid.active'
          },
          _dataAppearanceDisabled: {
            bg: 'base.disabled',
            color: 'base.disabled.text'
          }
        }
      },
      outline: {
        root: {
          bg: 'colorPalette.outline',
          color: 'colorPalette.outline.text',
          borderWidth: 'xs',
          borderColor: 'colorPalette.border',
          _dataHovered: {
            bg: 'colorPalette.outline.hover',
            borderColor: 'colorPalette.border.hover'
          },
          _dataPressed: {
            bg: 'colorPalette.outline.active',
            borderColor: 'colorPalette.border.active'
          },
          _dataAppearanceDisabled: {
            color: 'base.disabled.text',
            borderColor: 'base.disabled.border'
          }
        }
      },
      ghost: {
        root: {
          bg: 'colorPalette.ghost',
          color: 'colorPalette.ghost.text',
          _dataHovered: {
            bg: 'colorPalette.ghost.hover'
          },
          _dataPressed: {
            bg: 'colorPalette.ghost.active'
          },
          _dataAppearanceDisabled: {
            bg: 'base.disabled',
            color: 'base.disabled.text'
          }
        }
      },
      link: {
        root: {
          px: '0!',
          height: 'auto!',
          minWidth: 'auto!',
          color: 'colorPalette.text.2',
          _dataHovered: {
            textDecoration: 'underline'
          },
          _dataPressed: {
            color: 'colorPalette.text.1'
          },
          _dataAppearanceDisabled: {
            color: 'base.disabled.text'
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
        },
        loader: {
          height: '3.5'
        }
      },
      sm: {
        root: {
          fontSize: 'sm',
          height: '8',
          px: '3'
        },
        loader: {
          height: '5'
        }
      },
      md: {
        root: {
          fontSize: 'md',
          height: '10',
          px: '4'
        },
        loader: {
          height: '6'
        }
      },
      lg: {
        root: {
          fontSize: 'lg',
          height: '12',
          px: '6'
        },
        loader: {
          height: '7'
        }
      },
      xl: {
        root: {
          fontSize: 'xl',
          height: '14',
          px: '8'
        },
        loader: {
          height: '8'
        }
      }
    }
  },
  defaultVariants: { variant: 'solid', size: 'md' }
})
