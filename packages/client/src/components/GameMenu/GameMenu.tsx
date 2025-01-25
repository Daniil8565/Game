import React, { ReactElement, ReactNode, ReactPortal } from 'react'
import { LinckButton } from '@/components/LinckButton'

import styles from './GameMenu.module.scss'

interface IProps {
  children: React.ReactNode
}

export const GameMenu = ({ children }: IProps) => {
  const logout: () => void = () => {}
  const profile = () => {}
  return (
    <div className={styles['game']}>
      <nav className={styles['game__top-navigation']}>
        <LinckButton onClick={profile} text="Профиль" />
        <LinckButton onClick={logout} text="Выйти" />
      </nav>
      <main className={styles['game__main']}>
        {children}
        <nav className={styles['game__bottom-navigation']}>
          {/* хомяк, форум, лидборд, кастомизация */}
        </nav>
      </main>
    </div>
  )
}
