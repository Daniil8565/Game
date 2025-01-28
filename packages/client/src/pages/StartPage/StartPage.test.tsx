import React from 'react'
import { render, act } from '@testing-library/react'
import { TextEncoder } from 'util'

global.TextEncoder = TextEncoder

import { StartPage } from './StartPage'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('StartPage component', () => {
  jest.useFakeTimers()

  afterEach(() => {
    jest.clearAllTimers()
  })

  it('отображает начальное значение счётчика', () => {
    const { getByText } = renderWithRouter(<StartPage />)
    expect(getByText('3')).toBeInTheDocument()
  })

  it('уменьшает значение счётчика каждые 1 секунду', async () => {
    const { getByText } = renderWithRouter(<StartPage />)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(getByText('2')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(getByText('1')).toBeInTheDocument()
  })

  it('отображает кнопку "СТАРТ", когда счётчик равен нулю', async () => {
    const { findByText } = renderWithRouter(<StartPage />)

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    const startButton = await findByText('СТАРТ')
    expect(startButton).toBeInTheDocument()
  })

  it('очищает таймер при размонтировании компонента', () => {
    const spyClearInterval = jest.spyOn(global, 'clearInterval')

    const { unmount } = renderWithRouter(<StartPage />)
    act(() => {
      unmount()
    })

    expect(spyClearInterval).toHaveBeenCalled()
    spyClearInterval.mockRestore()
  })
})
