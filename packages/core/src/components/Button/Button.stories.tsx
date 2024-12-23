import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Box, Flex, GridItem, SBGrid } from '@nimbus-ui/styled-system/jsx'
import { FaEnvelope } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { button, loader } from '@nimbus-ui/styled-system/recipes'
import { Fragment, useState } from 'react'
import { ButtonContext, FileTrigger } from 'react-aria-components'
import { Loader } from '@components/Loader'
import { IconButton } from '@components/IconButton'

const meta = {
  title: 'Buttons/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    )
  ]
} satisfies Meta

export default meta

type Story = StoryObj<Omit<typeof meta, 'decorators'>>

export const Playground: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: button.variantMap.variant
    },
    size: {
      control: 'select',
      options: button.variantMap.size
    },
    colorPalette: {
      control: 'select',
      options: ['primary', 'base', 'error']
    },
    customLoader: {
      control: 'radio',
      options: ['Default', 'Custom'],
      mapping: {
        Default: undefined,
        Custom: 'Loading...'
      }
    },
    startSection: {
      control: 'radio',
      options: ['Icon', 'Empty'],
      mapping: {
        Icon: <FaEnvelope />,
        Empty: undefined
      }
    },
    endSection: {
      control: 'radio',
      options: ['Icon', 'Empty'],
      mapping: {
        Icon: <FaArrowRightLong />,
        Empty: undefined
      }
    }
  },
  args: {
    children: 'Start Now',
    isLoading: false,
    isDisabled: false
  },
  render: (args) => <Button aria-label="Nimbus Button" {...args} />
}

export const Variants = () => {
  return (
    <SBGrid gap="20" columns={5}>
      {button.variantMap.variant.map((variant) => (
        <Button key={variant} variant={variant}>
          Button
        </Button>
      ))}
    </SBGrid>
  )
}

export const Sizes = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.variant.map((variant) =>
        button.variantMap.size.map((size) => (
          <Button key={`${variant}_${size}`} variant={variant} size={size}>
            Button
          </Button>
        ))
      )}
    </SBGrid>
  )
}

export const Colors = () => {
  return (
    <SBGrid columns={3}>
      {button.variantMap.variant.map((variant) => (
        <Fragment key={variant}>
          <GridItem>
            <Button
              startSection={<FaEnvelope />}
              variant={variant}
              colorPalette="primary"
            >
              Button
            </Button>
          </GridItem>
          <GridItem>
            <Button startSection={<FaEnvelope />} variant={variant} colorPalette="base">
              Button
            </Button>
          </GridItem>
          <GridItem>
            <Button startSection={<FaEnvelope />} variant={variant} colorPalette="error">
              Button
            </Button>
          </GridItem>
        </Fragment>
      ))}
    </SBGrid>
  )
}

export const Icons = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.size.map((size) => (
        <Button key={`${size}_1`} startSection={<FaEnvelope />} size={size}>
          Button
        </Button>
      ))}
      {button.variantMap.size.map((size) => (
        <Button key={`${size}_2`} endSection={<FaArrowRightLong />} size={size}>
          Button
        </Button>
      ))}
    </SBGrid>
  )
}

export const Loading = () => {
  return (
    <SBGrid columns={5}>
      {loader.variantMap.variant.map((loaderVariant) =>
        button.variantMap.size.map((buttonSize) => (
          <Button
            key={`${buttonSize}_${loaderVariant}`}
            size={buttonSize}
            isLoading
            customLoader={<Loader variant={loaderVariant} />}
            aria-label="Loading Button"
          >
            Button
          </Button>
        ))
      )}
    </SBGrid>
  )
}

export const Disabled = () => {
  return (
    <SBGrid columns={5}>
      {button.variantMap.variant.map((variant) => (
        <GridItem key={variant}>
          <Button variant={variant} isDisabled aria-label="Disabled Button">
            Button
          </Button>
        </GridItem>
      ))}
    </SBGrid>
  )
}

export const AsLink = () => {
  return (
    <Button href="#" aria-label="Link Button">
      Link Button
    </Button>
  )
}

export const RenderProps = () => {
  return (
    <Flex gap="20">
      <Button
        startSection={({ isPressed }) =>
          isPressed ? <FaEnvelope /> : <FaArrowRightLong />
        }
        endSection={({ isPressed }) =>
          isPressed ? <FaEnvelope /> : <FaArrowRightLong />
        }
      >
        {({ isPressed }) => (isPressed ? 'Pressed' : 'Button')}
      </Button>
      <Button startSection={<Loader size="xs" variant="spinner" />}>Button</Button>
    </Flex>
  )
}

export const File = () => {
  const [file, setFile] = useState<string[] | null>(null)

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          const files = Array.from(e as FileList)
          const filenames = files.map((file) => file.name)
          setFile(filenames)
        }}
      >
        <Button>Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  )
}

export const Provider = () => {
  return (
    <ButtonContext.Provider value={{ isDisabled: true }}>
      <SBGrid columns={3}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <IconButton aria-label="Mail Button">
          <FaEnvelope />
        </IconButton>
      </SBGrid>
    </ButtonContext.Provider>
  )
}
