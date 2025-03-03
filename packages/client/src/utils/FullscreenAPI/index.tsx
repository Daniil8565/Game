import { useState, useCallback, useEffect } from 'react'

export const useFullscreen = (key: string) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true)
        })
        .catch(err =>
          console.error('Ошибка активации полноэкранного режима:', err)
        )
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false)
        })
        .catch(err =>
          console.error('Ошибка выхода из полноэкранного режима:', err)
        )
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        toggleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, toggleFullscreen])

  return { isFullscreen, toggleFullscreen }
}
