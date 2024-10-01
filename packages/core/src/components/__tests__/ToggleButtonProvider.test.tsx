import { ToggleButton, ToggleButtonProvider } from '@components/ToggleButton'
import { ToggleIconButton } from '@components/ToggleIconButton'
import { render } from '@testing-library/react'

describe('ToggleButtonProvider', () => {
  it('should pass down props to Toggle or ToggleIconButton components', () => {
    const { getByTestId } = render(
      <ToggleButtonProvider isDisabled>
        <ToggleButton data-testid="toggle-button" />
        <ToggleIconButton data-testid="toggle-icon-button" />
      </ToggleButtonProvider>
    )

    const button = getByTestId('toggle-button')
    const iconButton = getByTestId('toggle-icon-button')

    expect(button).toHaveAttribute('data-disabled')
    expect(button).toHaveAttribute('data-appearance-disabled')
    expect(iconButton).toHaveAttribute('data-disabled')
    expect(iconButton).toHaveAttribute('data-appearance-disabled')
  })

  it('should control the selected state when selectedValue is provided', () => {
    const getRender = (value: string | null) => (
      <ToggleButtonProvider selectedValue={value}>
        <ToggleButton value="button-value" data-testid="toggle-button" />
        <ToggleIconButton value="icon-button-value" data-testid="toggle-icon-button" />
      </ToggleButtonProvider>
    )

    const { getByTestId, rerender } = render(getRender('button-value'))

    const button = getByTestId('toggle-button')
    const iconButton = getByTestId('toggle-icon-button')

    expect(button).toHaveAttribute('data-selected')
    expect(iconButton).not.toHaveAttribute('data-selected')

    rerender(getRender('icon-button-value'))

    expect(button).not.toHaveAttribute('data-selected')
    expect(iconButton).toHaveAttribute('data-selected')

    rerender(getRender(null))

    expect(button).not.toHaveAttribute('data-selected')
    expect(iconButton).not.toHaveAttribute('data-selected')
  })
})
