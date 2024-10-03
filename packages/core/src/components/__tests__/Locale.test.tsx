import { Locale } from '@locale'
import { render } from '@testing-library/react'

describe('Locale', () => {
  it('should set the lang and corresponding dir for the entire sub tree', () => {
    const { getByTestId } = render(<Locale locale="ar-AE" data-testid="locale" />)

    const div = getByTestId('locale')
    expect(div).toHaveAttribute('lang')
    expect(div).toHaveAttribute('dir')

    const lang = div.getAttribute('lang')
    const dir = div.getAttribute('dir')

    expect(lang).toBe('ar-AE')
    expect(dir).toBe('rtl')
  })
})
