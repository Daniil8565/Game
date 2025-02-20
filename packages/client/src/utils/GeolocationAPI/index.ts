import { useState, useCallback } from 'react'

export const useGeolocation = (key: string) => {
  const [location, setLocation] = useState('')
  const getLocation = useCallback(() => {
    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      setLocation(latitude + ', ' + longitude)
    }

    function error() {
      setLocation('Не получилось получить информацию')
    }

    if (!navigator.geolocation) {
      setLocation('Не поддерживается браузером')
    } else {
      setLocation('Ищем')
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }, [])

  return { location, getLocation }
}
