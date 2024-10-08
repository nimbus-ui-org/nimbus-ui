import { Transition } from '@components/Transition'
import { act, render } from '@testing-library/react'

vi.useFakeTimers()

describe('Transition', () => {
  beforeEach(() => {
    vi.clearAllTimers()
  })

  it('should set data-in attribute when in is true', () => {
    const { getByTestId } = render(<Transition data-testid="transition" in />)

    const div = getByTestId('transition')
    expect(div).toHaveAttribute('data-in')
  })

  it('should unmount when in is false', () => {
    const { queryByTestId } = render(<Transition data-testid="transition" in={false} />)

    const div = queryByTestId('transition')

    expect(div).toBe(null)
  })

  it('should set data-out and hidden attributes when in is false and keepMounted is true', () => {
    const { getByTestId } = render(
      <Transition data-testid="transition" in={false} keepMounted />
    )

    const div = getByTestId('transition')
    expect(div).toHaveAttribute('data-out')
    expect(div).toHaveAttribute('data-hidden')
    expect(div).toHaveAttribute('aria-hidden')
  })

  it('should set data-out and hidden attributes when in is false and keepMounted is true', () => {
    const { getByTestId } = render(
      <Transition data-testid="transition" in={false} keepMounted />
    )

    const div = getByTestId('transition')
    expect(div).toHaveAttribute('data-out')
    expect(div).toHaveAttribute('data-hidden')
    expect(div).toHaveAttribute('aria-hidden')
  })

  it('should call onEnter and onEnterComplete when in becomes true', () => {
    const onEnter = vi.fn()
    const onEnterComplete = vi.fn()

    const { rerender } = render(<Transition in={false} />)

    expect(onEnter).not.toHaveBeenCalled()
    expect(onEnterComplete).not.toHaveBeenCalled()

    rerender(<Transition onEnter={onEnter} onEnterComplete={onEnterComplete} in />)

    act(() => void vi.advanceTimersByTime(50))

    expect(onEnter).toHaveBeenCalledTimes(1)

    act(() => void vi.advanceTimersByTime(400))

    expect(onEnterComplete).toHaveBeenCalledTimes(1)
  })

  it('should call onExit and onExitComplete when in becomes false', () => {
    const onExit = vi.fn()
    const onExitComplete = vi.fn()

    const { rerender } = render(<Transition in />)

    expect(onExit).not.toHaveBeenCalled()
    expect(onExitComplete).not.toHaveBeenCalled()

    rerender(<Transition onExit={onExit} onExitComplete={onExitComplete} in={false} />)

    act(() => void vi.advanceTimersByTime(50))

    expect(onExit).toHaveBeenCalledTimes(1)

    act(() => void vi.advanceTimersByTime(400))

    expect(onExitComplete).toHaveBeenCalledTimes(1)
  })

  it('should delay enter animation when enterDelay is set', () => {
    const onEnter = vi.fn()

    const { rerender } = render(<Transition in={false} />)

    expect(onEnter).not.toHaveBeenCalled()

    rerender(<Transition onEnter={onEnter} enterDelay={400} in />)

    act(() => void vi.advanceTimersByTime(50))

    expect(onEnter).not.toHaveBeenCalled()

    act(() => void vi.advanceTimersByTime(400))

    expect(onEnter).toHaveBeenCalledTimes(1)
  })

  it('should delay exit animation when exitDelay is set', () => {
    const onExit = vi.fn()

    const { rerender } = render(<Transition in />)

    expect(onExit).not.toHaveBeenCalled()

    rerender(<Transition onExit={onExit} exitDelay={400} in={false} />)

    act(() => void vi.advanceTimersByTime(50))

    expect(onExit).not.toHaveBeenCalled()

    act(() => void vi.advanceTimersByTime(400))

    expect(onExit).toHaveBeenCalledTimes(1)
  })

  it('should play enter transition throughout duration specified', () => {
    const onEnterComplete = vi.fn()

    const { rerender } = render(<Transition in={false} />)

    expect(onEnterComplete).not.toHaveBeenCalled()

    rerender(<Transition onEnterComplete={onEnterComplete} duration={1000} in />)

    act(() => void vi.advanceTimersByTime(900))

    expect(onEnterComplete).not.toHaveBeenCalled()

    act(() => void vi.advanceTimersByTime(150))

    expect(onEnterComplete).toHaveBeenCalledTimes(1)
  })

  it('should play exit transition throughout exit duration specified', () => {
    const onExitComplete = vi.fn()

    const { rerender } = render(<Transition in />)

    expect(onExitComplete).not.toHaveBeenCalled()

    rerender(<Transition onExitComplete={onExitComplete} duration={1000} in={false} />)

    act(() => void vi.advanceTimersByTime(900))

    expect(onExitComplete).not.toHaveBeenCalled()

    act(() => void vi.advanceTimersByTime(150))

    expect(onExitComplete).toHaveBeenCalledTimes(1)
  })
})
