import { ToggleButton } from '@components/ToggleButton'
import { ToggleIconButton } from '@components/ToggleIconButton'
import { testAccessibility } from './utils'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('ToggleButton', () => {
  testAccessibility(<ToggleButton aria-label="Nimus Toggle Button" />)
  testAccessibility(<ToggleIconButton aria-label="Nimus Toggle Icon Button" />)

  it('should add data-value attribute when value prop is specified', () => {
    const getRender = (value?: string) => (
      <>
        <ToggleButton value={value} data-testid="toggle-button" />
        <ToggleIconButton value={value} data-testid="toggle-icon-button" />
      </>
    )

    const { getByTestId, rerender } = render(getRender())

    const button = getByTestId('toggle-button')
    const iconButton = getByTestId('toggle-icon-button')

    expect(button).not.toHaveAttribute('data-value')
    expect(iconButton).not.toHaveAttribute('data-value')

    rerender(getRender('test-value'))
    expect(button).toHaveAttribute('data-value')
    const dataButtonValue = button.getAttribute('data-value')
    expect(dataButtonValue).toBe('test-value')
    expect(iconButton).toHaveAttribute('data-value')
    const dataIconButtonValue = button.getAttribute('data-value')
    expect(dataIconButtonValue).toBe('test-value')
  })

  it('should fire onChange passing isSelected and value', async () => {
    const onChangeButton = vi.fn()
    const onChangeIconButton = vi.fn()

    const { getByTestId } = render(
      <>
        <ToggleButton
          value="test-value"
          onChange={onChangeButton}
          data-testid="toggle-button"
        />
        <ToggleIconButton
          value="test-value"
          onChange={onChangeIconButton}
          data-testid="toggle-icon-button"
        />
      </>
    )

    const button = getByTestId('toggle-button')
    const iconButton = getByTestId('toggle-icon-button')

    expect(onChangeButton).not.toHaveBeenCalled()
    expect(onChangeIconButton).not.toHaveBeenCalled()

    await userEvent.click(button)
    expect(onChangeButton).toHaveBeenCalledTimes(1)
    expect(onChangeButton).toHaveBeenNthCalledWith(1, true, 'test-value')

    await userEvent.click(iconButton)
    expect(onChangeIconButton).toHaveBeenCalledTimes(1)
    expect(onChangeIconButton).toHaveBeenNthCalledWith(1, true, 'test-value')
  })
})
