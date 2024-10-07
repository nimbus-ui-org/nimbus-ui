import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { useAnimationFrame, type AnimationCallbackParams } from '@hooks'

vi.useFakeTimers()

const advanceTimersToNextFrame = () => void vi.advanceTimersToNextFrame()

describe('useAnimationFrame', () => {
  beforeEach(() => {
    vi.clearAllTimers()
  })

  it('should call callback repeatedly whenever a frame is available', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useAnimationFrame(callback))

    const [start] = result.current

    act(start)

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalled()

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should cancel animation frame when cancel is called', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useAnimationFrame(callback))

    const [start, cancel] = result.current

    act(start)

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalled()

    act(cancel)

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should cancel animation frame when complete function is called and call onComplete if provided', () => {
    let counter = 2
    const onComplete = vi.fn()
    const callback = vi.fn(({ complete }: AnimationCallbackParams) => {
      if (counter === 0) {
        complete(onComplete)
      } else {
        counter--
      }
    })
    const { result } = renderHook(() => useAnimationFrame(callback))

    const [start] = result.current

    act(start)

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalledTimes(1)

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalledTimes(2)

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalledTimes(3)

    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalledTimes(3)
    expect(onComplete).toHaveBeenCalledTimes(1)
  })

  it('should return true when isActive is called and the animation is running, otherwise false', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useAnimationFrame(callback))

    const [start, cancel, isActive] = result.current

    const isActiveMock = vi.fn(isActive)
    const isActiveMockCb = () => void isActiveMock()

    act(start)

    act(isActiveMockCb)

    expect(isActiveMock).toHaveReturnedWith(true)

    act(advanceTimersToNextFrame)

    act(isActiveMockCb)

    expect(isActiveMock).toHaveReturnedWith(true)

    act(cancel)

    act(isActiveMockCb)

    expect(isActiveMock).toHaveReturnedWith(false)
  })

  it('should auto-invoke the animation on mount if autoInvoke is true', () => {
    const callback = vi.fn()
    renderHook(() => useAnimationFrame(callback, true, []))

    expect(callback).not.toHaveBeenCalled()

    act(advanceTimersToNextFrame)
    act(advanceTimersToNextFrame)

    expect(callback).toHaveBeenCalledTimes(2)
  })
})
