import { useState, useEffect } from 'react'
import { ThemeContext, themes } from './ThemeContext'

interface IProps {
  children: React.ReactNode
}
const getTheme = () => {
  const theme: string = `${window?.localStorage?.getItem('theme')}`

  if (Object.keys(themes).includes(theme)) return themes[theme]
  const userMedia = window.matchMedia('(prefers-color-scheme: light)')

  if (userMedia.matches) return themes['base-light']
  return themes['base-light']
}

const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState(getTheme)

  console.log(theme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme.name
    localStorage.setItem('theme', theme.name)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
