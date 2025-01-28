import React, { ReactElement, ReactNode, ReactPortal } from 'react'
import { LinckButton } from '@/components/LinckButton'
import { useLocation, Link } from 'react-router-dom'
import humster_icon from '../../image/humster-icon.svg'
import leader_icon from '../../image/leaderboard-icon.svg'
import forum_icon from '../../image/forum-icon.svg'
import castom_icon from '../../image/castom-icon.svg'

import styles from './GameMenu.module.scss'

interface IProps {
  children: React.ReactNode
}

export const GameMenu = ({ children }: IProps) => {
  const logout: () => void = () => {}
  const profile = () => {}

  const pathname = useLocation().pathname
  return (
    <div className={styles['game']}>
      <nav className={styles['game__top-navigation']}>
        <LinckButton onClick={profile} text="Профиль" />
        <LinckButton onClick={logout} text="Выйти" />
      </nav>
      <main className={styles['game__main']}>
        {children}
        <nav className={styles['game__bottom-navigation']}>
          <ul>
            <li>
              <Link
                to="/game/humster"
                className={
                  [
                    '/game/humster',
                    '/game/final-page',
                    '/game/start-page',
                  ].indexOf(pathname) !== -1
                    ? styles['choose']
                    : ''
                }>
                <img src={humster_icon} />
                <span>Хомяк</span>
              </Link>
            </li>
            <li>
              <Link
                to="/game/forum"
                className={pathname === '/game/forum' ? styles['choose'] : ''}>
                <img src={forum_icon} />
                <span>Форум</span>
              </Link>
            </li>
            <li>
              <Link
                to="/game/leaderbord"
                className={
                  pathname === '/game/leaderbord' ? styles['choose'] : ''
                }>
                <img src={leader_icon} />
                <span>Лидборд</span>
              </Link>
            </li>
            <li>
              <Link
                to="/game/castom"
                className={pathname === '/game/castom' ? styles['choose'] : ''}>
                <img src={castom_icon} />
                <span>Настройки</span>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
