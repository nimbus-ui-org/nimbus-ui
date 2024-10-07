import { useUpdateEffect } from '@hooks'
import { act, renderHook } from '@testing-library/react'

describe('useUpdateEffect', () => {
  it('should not run the effect on first render', () => {
    const effect = vi.fn()
    const { rerender } = renderHook((trigger: boolean = true) =>
      useUpdateEffect(effect, [trigger])
    )

    expect(effect).not.toHaveBeenCalled()

    act(() => rerender(false))

    expect(effect).toHaveBeenCalledTimes(1)
  })
})
