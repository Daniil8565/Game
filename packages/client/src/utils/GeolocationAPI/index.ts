import { useState, useCallback, useEffect } from 'react'

export const useGeolocation = (key: string) => {
  const [location, setLocation] = useState('123')
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
      navigator.geolocation.getCurrentPosition(
        () => {
          console.log('jshfdg')
        },
        () => {
          console.log('ddddddd')
        }
      )
      // navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [])

  return { location, getLocation }
}
