import { ToggleButton } from '@components/ToggleButton'
import { ToggleIconButton } from '@components/ToggleIconButton'
import { render } from '@testing-library/react'
import { ToggleButtonContext } from 'react-aria-components'

describe('ToggleButtonContext', () => {
  it('should pass down props to Toggle or ToggleIconButton components', () => {
    const { getByTestId } = render(
      <ToggleButtonContext.Provider value={{ isDisabled: true }}>
        <ToggleButton data-testid="toggle-button" />
        <ToggleIconButton data-testid="toggle-icon-button" />
      </ToggleButtonContext.Provider>
    )

    const button = getByTestId('toggle-button')
    const iconButton = getByTestId('toggle-icon-button')

    expect(button).toHaveAttribute('data-disabled')
    expect(button).toHaveAttribute('data-appearance-disabled')
    expect(iconButton).toHaveAttribute('data-disabled')
    expect(iconButton).toHaveAttribute('data-appearance-disabled')
  })
})
