import { Button, ButtonContext } from '@components/Button'
import { IconButton } from '@components/IconButton'
import { render } from '@testing-library/react'

describe('ButtonContext', () => {
  it('should pass down props to Button or IconButton components', () => {
    const { getByTestId } = render(
      <ButtonContext.Provider value={{ isDisabled: true }}>
        <Button data-testid="button" />
        <IconButton data-testid="icon-button" />
      </ButtonContext.Provider>
    )

    const button = getByTestId('button')
    const iconButton = getByTestId('icon-button')

    expect(button).toHaveAttribute('data-disabled')
    expect(button).toHaveAttribute('data-appearance-disabled')
    expect(iconButton).toHaveAttribute('data-disabled')
    expect(iconButton).toHaveAttribute('data-appearance-disabled')
  })
})
