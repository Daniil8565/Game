import { API_URL } from '@/constants'

const UserEditData = (
  requestData: Record<string, string>,
  Change: (data: Record<string, string>) => void
) => {
  return fetch(`${API_URL}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(requestData),
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      Change(data)
      console.log(data)
    })
    .catch(error => console.log(error))
}

export default UserEditData
