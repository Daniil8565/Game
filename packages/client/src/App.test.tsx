import App from './App'
import { render, screen } from '@testing-library/react'

const appContent = 'Авторизация'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)
