import React from 'react'
import styles from './Geolocation.module.scss'
import { useGeolocation } from '../../utils/GeolocationAPI'

export const Geolocation: React.FC = () => {
  const { location, getLocation } = useGeolocation('')
  // let location;
  return (
    <div className={styles.geolocation}>
      <label> Mестoположение: </label>

      <label> {location}</label>
      <button
        onClick={getLocation}
        className={styles['geolocation__serch-button']}>
        {location ? 'Обновить' : 'Найти'}
      </button>
    </div>
  )
}
