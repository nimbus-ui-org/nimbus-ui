import { Button, ButtonContext, IconButton } from '@components/Buttons'
import { render } from '@testing-library/react'
import { FaEnvelope } from 'react-icons/fa'

describe('ButtonContext', () => {
  it('should pass down props to Button or IconButton components', () => {
    const { getByTestId } = render(
      <ButtonContext isDisabled>
        <Button data-testid="button">Button</Button>
        <IconButton data-testid="icon-button">
          <FaEnvelope />
        </IconButton>
      </ButtonContext>
    )

    const button = getByTestId('button')
    const iconButton = getByTestId('icon-button')

    expect(button).toHaveAttribute('data-disabled')
    expect(button).toHaveAttribute('data-appearance-disabled')
    expect(iconButton).toHaveAttribute('data-disabled')
    expect(iconButton).toHaveAttribute('data-appearance-disabled')
  })
})
