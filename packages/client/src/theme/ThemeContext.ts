import { createContext } from 'react'
export type Theme = {
  humster: string
  color: {
    text: string
    block: string
    large_circle_top: string
    large_circle_bottom: string
    small_circle_top: string
    small_circle_bottom: string
    background: string
    blok_background: string
    border: string
    button: string
  }
}

interface ThemeContextType {
  theme?: Theme
  setTheme?: any
}

// TODO убрать themes при подключении ручек
export const themes: Record<string, Theme> = {
  'base-dark': {
    humster: '../src/image/humster.png',
    color: {
      text: '#ffffff',
      block: '#32363c',
      large_circle_top: '#5155DA',
      large_circle_bottom: '#282D74',
      small_circle_top: '#35389e',
      small_circle_bottom: '#1c2848',
      background: '#2c2f35',
      blok_background: '#32363c',
      border: '#F9D838',
      button: '#464ab7',
    },
  },
  'base-light': {
    humster: '../src/image/humster.png',
    color: {
      text: '#2c2f35',
      block: '#dde1e9',
      large_circle_top: '#5155DA',
      large_circle_bottom: '#282D74',
      small_circle_top: '#35389e',
      small_circle_bottom: '#1c2848',
      background: '#ECEFF1',
      blok_background: '#dde1e9',
      border: '#F9D838',
      button: '#464ab7',
    },
  },
  'birthday-light': {
    humster: '../src/image/humster-birthday.png',
    color: {
      text: '#3e3b32',
      block: '#dde1e9',
      large_circle_top: '#c5f9d6',
      large_circle_bottom: '#aedfbe',
      small_circle_top: '#c5f9d6',
      small_circle_bottom: '#aedfbe',
      background: '#ECEFF1',
      blok_background: '#dde1e9',
      border: '#aa96da',
      button: '#feffd3',
    },
  },
  'grey-dark': {
    humster: '../src/image/humster-grey.png',
    color: {
      text: '#ffffff',
      block: '#32363c',
      large_circle_top: '#969696',
      large_circle_bottom: '#393939',
      small_circle_top: '#969696',
      small_circle_bottom: '#393939',
      background: '#2c2f35',
      blok_background: '#32363c',
      border: '#969696',
      button: '#484848',
    },
  },
}

export const ThemeContext = createContext<ThemeContextType>({})
