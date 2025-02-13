import { useState, useCallback, useEffect } from 'react'

export const useFullscreen = (key: string) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = useCallback(() => {
    // Проверка, что код выполняется в браузере (на клиенте)
    if (
      typeof document !== 'undefined' &&
      typeof document.fullscreenElement !== 'undefined'
    ) {
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
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Проверка, что код выполняется в браузере
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === key) {
          toggleFullscreen()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [key, toggleFullscreen])

  return { isFullscreen, toggleFullscreen }
}
