import { Button } from '@components/Buttons'
import { testAccessibility } from './utils'
import { render } from '@testing-library/react'

describe('Button', () => {
  testAccessibility(<Button aria-label="Nimus Button" />)

  it('should add data-loading attribute when isLoading is true', () => {
    const { getByRole, rerender } = render(<Button />)

    const button = getByRole('button')

    expect(button).not.toHaveAttribute('data-loading')
    rerender(<Button isLoading />)
    expect(button).toHaveAttribute('data-loading')
  })

  it('should add data-disabled attribute when isDisabled or isLoading is true', () => {
    const { getByRole, rerender } = render(<Button />)

    const button = getByRole('button')

    expect(button).not.toHaveAttribute('data-disabled')
    rerender(<Button isLoading />)
    expect(button).toHaveAttribute('data-disabled')
    rerender(<Button isDisabled />)
    expect(button).toHaveAttribute('data-disabled')
  })

  it('should add data-appearance-disabled when isDisabled is true', () => {
    const { getByRole, rerender } = render(<Button />)

    const button = getByRole('button')

    expect(button).not.toHaveAttribute('data-disabled')
    rerender(<Button isDisabled />)
    expect(button).toHaveAttribute('data-appearance-disabled')
  })

  it('should render start section when specified', () => {
    const { container, rerender } = render(<Button />)

    const startSection = () => container.querySelector('[data-section="start"]')

    expect(startSection()).not.toBeInTheDocument()
    rerender(<Button startSection="start section" />)
    expect(startSection()).toBeInTheDocument()
    expect(startSection()).toHaveTextContent('start section')
  })

  it('should render end section when specified', () => {
    const { container, rerender } = render(<Button />)

    const rightSection = () => container.querySelector('[data-section="end"]')

    expect(rightSection()).not.toBeInTheDocument()
    rerender(<Button endSection="end section" />)
    expect(rightSection()).toBeInTheDocument()
    expect(rightSection()).toHaveTextContent('end section')
  })
})
