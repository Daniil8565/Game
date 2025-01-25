import { API_URL } from '@/constants'

export class UserService {
  requestData = (cb: () => void, errorCb: (reason: string) => void) => {
    return fetch(`${API_URL}/auth/user`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => {
        if (res.status === 401) {
          throw new Error('Вы не авторизованы')
        }

        return res.json()
      })
      .then(cb)
      .catch(errorCb)
  }
}
