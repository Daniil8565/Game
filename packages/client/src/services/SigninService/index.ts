import { API_URL } from '@/constants'
import { SinginRequestDataType } from '@/types/apiTypes'

interface SigninServiceRequestType {
  requestData: SinginRequestDataType
  successCallback: () => void
  errorCallback: (error: any) => void
}

export class SigninService {
  requestData = ({
    requestData,
    successCallback,
    errorCallback,
  }: SigninServiceRequestType) => {
    return fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(requestData),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`)
        }
      })
      .then(successCallback)
      .catch(error => errorCallback(error.message))
  }
}
