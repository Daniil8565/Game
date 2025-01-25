import React from 'react'
import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
    </div>
  )
}
