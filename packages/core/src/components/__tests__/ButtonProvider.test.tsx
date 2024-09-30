import { Button, ButtonProvider, IconButton } from '@components/Buttons'
import { render } from '@testing-library/react'

describe('ButtonProvider', () => {
  it('should pass down props to Button or IconButton components', () => {
    const { getByTestId } = render(
      <ButtonProvider isDisabled>
        <Button data-testid="button" />
        <IconButton data-testid="icon-button" />
      </ButtonProvider>
    )

    const button = getByTestId('button')
    const iconButton = getByTestId('icon-button')

    expect(button).toHaveAttribute('data-disabled')
    expect(button).toHaveAttribute('data-appearance-disabled')
    expect(iconButton).toHaveAttribute('data-disabled')
    expect(iconButton).toHaveAttribute('data-appearance-disabled')
  })
})
