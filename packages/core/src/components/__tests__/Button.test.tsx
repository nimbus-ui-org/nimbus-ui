import { Button, IconButton } from '@components/Buttons'
import { testAccessibility } from './utils'
import { render } from '@testing-library/react'

describe('Button', () => {
  testAccessibility(<Button aria-label="Nimus Button" />)
  testAccessibility(<IconButton aria-label="Nimus Icon Button" />)

  it('should add data-loading attribute when isLoading is true', () => {
    const { getByRole, rerender } = render(<Button />)

    const button = getByRole('button')

    expect(button).not.toHaveAttribute('data-loading')
    rerender(<Button isLoading />)
    expect(button).toHaveAttribute('data-loading')
  })

  it('should add data-disabled attribute when isDisabled or isLoading is true', () => {
    const { getByTestId, rerender } = render(
      <>
        <Button data-testid="button" />
        <IconButton data-testid="icon-button" />
      </>
    )

    const button = getByTestId('button')
    const iconButton = getByTestId('icon-button')

    expect(button).not.toHaveAttribute('data-disabled')
    expect(iconButton).not.toHaveAttribute('data-disabled')
    rerender(
      <>
        <Button isLoading data-testid="button" />
        <IconButton data-testid="icon-button" />
      </>
    )
    expect(button).toHaveAttribute('data-disabled')
    rerender(
      <>
        <Button isDisabled data-testid="button" />
        <IconButton isDisabled data-testid="icon-button" />
      </>
    )
    expect(button).toHaveAttribute('data-disabled')
    expect(iconButton).toHaveAttribute('data-disabled')
  })

  it('should add data-appearance-disabled when isDisabled is true', () => {
    const { getByTestId, rerender } = render(
      <>
        <Button data-testid="button" />
        <IconButton data-testid="icon-button" />
      </>
    )

    const button = getByTestId('button')
    const iconButton = getByTestId('icon-button')

    expect(button).not.toHaveAttribute('data-disabled')
    expect(iconButton).not.toHaveAttribute('data-disabled')
    rerender(
      <>
        <Button isDisabled data-testid="button" />
        <IconButton isDisabled data-testid="icon-button" />
      </>
    )
    expect(button).toHaveAttribute('data-appearance-disabled')
    expect(iconButton).toHaveAttribute('data-appearance-disabled')
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
