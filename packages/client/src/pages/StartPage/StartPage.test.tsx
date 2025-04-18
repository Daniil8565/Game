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

  it('отображает кнопку "СТАРТ", когда счётчик равен нулю', async () => {
    const setIsGameStarted = jest.fn()
    const { findByText } = renderWithRouter(
      <StartPage setIsGameStarted={setIsGameStarted} />
    )

    const startButton = await findByText('СТАРТ')
    expect(startButton).toBeInTheDocument()
  })
})
