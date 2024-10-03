import { NimbusProvider } from '@provider'
import { render } from '@testing-library/react'

describe('NimbusProvider', () => {
  it('should set the lang and corresponding dir on html element based on provided locale', () => {
    render(<NimbusProvider locale="ar-AE" />)

    const html = document.documentElement

    expect(html).toHaveAttribute('lang')
    expect(html).toHaveAttribute('dir')

    const lang = html.getAttribute('lang')
    const dir = html.getAttribute('dir')

    expect(lang).toBe('ar-AE')
    expect(dir).toBe('rtl')
  })
})
