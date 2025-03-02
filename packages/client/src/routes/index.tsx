import { ProtectedRouteEditData } from '@/components/ProtectedRoutes/ProtectedRouteEditData'
import { ProtectedRouteEditPassword } from '@/components/ProtectedRoutes/ProtectedRouteEditPassword'
import { ProtectedRouteForum } from '@/components/ProtectedRoutes/ProtectedRouteForum'
import { ProtectedRouteGame } from '@/components/ProtectedRoutes/ProtectedRouteGame'
import { ProtectedRouteLeaderboard } from '@/components/ProtectedRoutes/ProtectedRouteLeaderboard'
import { ProtectedRouteProfile } from '@/components/ProtectedRoutes/ProtectedRouteProfile'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
import { SignupPage } from '@/pages/AuthPages/SignupPage'
import { PageError } from '@/pages/PageError'
import { loadSignin } from '@/slices/authSlice'
import { AppDispatch } from '@/store/store'
import { ComponentType, ReactNode } from 'react'
import error404Image from '../image/404.png'
import error500Image from '../image/fixiki.png'

// Тип маршрута
export type RouteConfig = {
  path: string
  exact?: boolean
  component: ComponentType<any> | ReactNode
  loader?: (dispatch: AppDispatch) => Promise<any>
}

export const routes: RouteConfig[] = [
  { path: '/signup', exact: true, component: SignupPage },
  {
    path: '/signin',
    exact: true,
    component: SigninPage,
    loader: (dispatch: AppDispatch) => dispatch(loadSignin()),
  },
  { path: '/game', exact: true, component: ProtectedRouteGame },
  { path: '/profile', exact: true, component: ProtectedRouteProfile },
  { path: '/profile/editData', exact: true, component: ProtectedRouteEditData },
  {
    path: '/profile/editPassword',
    exact: true,
    component: ProtectedRouteEditPassword,
  },
  { path: '/leaderboard', exact: true, component: ProtectedRouteLeaderboard },
  { path: '/forum', exact: true, component: ProtectedRouteForum },
  {
    path: '/error',
    exact: true,
    component: (
      <PageError
        code={500}
        message="Всё сломалось, но мы уже летим чинить"
        image={error500Image}
      />
    ),
  },
  {
    path: '*',
    exact: true,
    component: (
      <PageError
        code={404}
        message="Такой страницы не существует :("
        image={error404Image}
        rounded={true}
      />
    ),
  },
]
