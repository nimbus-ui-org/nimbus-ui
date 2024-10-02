import { ToggleButton, ToggleButtonGroup } from '@components/ToggleButton'
import { ToggleIconButton } from '@components/ToggleIconButton'
import { render } from '@testing-library/react'

describe('ToggleButtonGroup', () => {
  it('should control the selected state when selectedValue is provided', () => {
    const getRender = (value: string | null) => (
      <ToggleButtonGroup selectedValue={value}>
        <ToggleButton value="button-value" data-testid="toggle-button" />
        <ToggleIconButton value="icon-button-value" data-testid="toggle-icon-button" />
      </ToggleButtonGroup>
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
