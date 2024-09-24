import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

export const testAccessibility = (element: React.ReactNode) => {
  it('should not violate accessibility specs', async () => {
    const { container } = render(element)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
}
