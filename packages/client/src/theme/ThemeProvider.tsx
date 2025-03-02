import { useState, useEffect } from 'react'
import { Theme, ThemeContext, themes } from './ThemeContext'
import { getUserThems, getThems } from '@/slices/themeAPI'
import { store } from '@/store/store'
import { response } from 'express'

interface IProps {
  children: React.ReactNode
}
const getTheme: () => Theme = () => {
  const theme: string = `${window?.localStorage?.getItem('theme')}`
  if (theme) return JSON.parse(theme)
  const userMedia = window.matchMedia('(prefers-color-scheme: ligth)')
  const user_theme_name = userMedia ? 'base-light' : 'base-dark'
  // TODO убрать заглушку, вернуть тему пользователя, после реализации ручек
  return themes[user_theme_name]
  getUserThems()
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('error')
      getThems(user_theme_name).then(response => {
        return response.data
      })
    })
}

const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState(getTheme)
  useEffect(() => {
    document.getElementById('root')!.style.cssText += `
    --background-color: ${theme.color.background};
    --blok-background-color: ${theme.color.blok_background};
    --border-color: ${theme.color.border};
    --text-color:${theme.color.text};
    --button-color: ${theme.color.button};
   
  `
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
