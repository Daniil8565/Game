import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import styles from './FinalPage.module.scss'

export const  FinalPage: React.FC = () => {
//   const [count, setCount] = useState<number>(3)

  return (
    <div className={styles['final-page']}>
       <label>Время вышло</label>

       <label>Вы успели заработать монет</label>
          {/* <Link to="/start-page" className={styles['button-text']}>
            СТАРТ
          </Link> */}
     
    </div>
  )
}