import { createContext } from 'react'
type Theme = {
  name: string
  humster: string
  color: {
    text: string
    block: string
    large_circle_top: string
    large_circle_bottom: string
    small_circle_top: string
    small_circle_bottom: string
  }
}

interface ThemeContextType {
  theme: Theme
  setTheme: unknown
}

export const themes: Record<string, Theme> = {
  'base-dark': {
    name: 'base-dark',
    humster: '',
    color: {
      text: '',
      block: '',
      large_circle_top: '',
      large_circle_bottom: '',
      small_circle_top: '',
      small_circle_bottom: '',
    },
  },
  'base-light': {
    name: 'base-light',
    humster: '',
    color: {
      text: '',
      block: '',
      large_circle_top: '',
      large_circle_bottom: '',
      small_circle_top: '',
      small_circle_bottom: '',
    },
  },
  'birthday-light': {
    name: 'birthday-light',
    humster: '',
    color: {
      text: '',
      block: '',
      large_circle_top: '',
      large_circle_bottom: '',
      small_circle_top: '',
      small_circle_bottom: '',
    },
  },
  'work-dark': {
    name: 'work-dark',
    humster: '',
    color: {
      text: '',
      block: '',
      large_circle_top: '',
      large_circle_bottom: '',
      small_circle_top: '',
      small_circle_bottom: '',
    },
  },
  'grey-middle': {
    name: 'grey-middle',
    humster: '',
    color: {
      text: '',
      block: '',
      large_circle_top: '',
      large_circle_bottom: '',
      small_circle_top: '',
      small_circle_bottom: '',
    },
  },
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)
