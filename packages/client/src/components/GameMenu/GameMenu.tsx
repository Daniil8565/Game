import React, { useCallback } from 'react'
import { LinckButton } from '@/components/LinckButton'
import { useNavigate } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom'
import humster_icon from '../../image/humster-icon.svg'
import leader_icon from '../../image/leaderboard-icon.svg'
import forum_icon from '../../image/forum-icon.svg'
import castom_icon from '../../image/castom-icon.svg'

import styles from './GameMenu.module.scss'
import { useErrorBoundaryContext } from '../ErrorBoundary/ErrorBoundaryContext'

interface IProps {
  children: React.ReactNode
}

export const GameMenu = ({ children }: IProps) => {
  const navigate = useNavigate()
  const { showBoundary } = useErrorBoundaryContext()

  const logout = () => {
    showBoundary(new Error('Intentional error to test ErrorBoundary'), {})
  }

  const profile = () => {
    navigate('/profile')
  }

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
                to="/game"
                className={pathname === '/game' ? styles['choose'] : ''}>
                <img src={humster_icon} />
                <span>Хомяк</span>
              </Link>
            </li>
            <li>
              <Link
                to="/forum"
                className={pathname === '/forum' ? styles['choose'] : ''}>
                <img src={forum_icon} />
                <span>Форум</span>
              </Link>
            </li>
            <li>
              <Link
                to="/leaderboard"
                className={pathname === '/leaderboard' ? styles['choose'] : ''}>
                <img src={leader_icon} />
                <span>Лидборд</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={pathname === '/settings' ? styles['choose'] : ''}>
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
