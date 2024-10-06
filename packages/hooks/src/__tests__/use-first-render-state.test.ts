import { useFirstRenderState } from '@hooks'
import { act, renderHook } from '@testing-library/react'

describe('useFirstRenderState', () => {
  it("should return true if it's the first render and false otherwise", () => {
    const { result, rerender } = renderHook(() => useFirstRenderState())

    expect(result.current).toBe(true)

    act(rerender)

    expect(result.current).toBe(false)
  })
})
