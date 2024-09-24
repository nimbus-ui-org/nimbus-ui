import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

export const testAccessibility = (element: React.ReactNode) => {
  it('should not have accessility violations', async () => {
    const { container } = render(element)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
}
