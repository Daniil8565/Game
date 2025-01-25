import { API_URL } from '@/constants'
import { SignupRequestDataType } from '@/types/apiTypes'

interface SignupServiceRequestType {
  requestData: SignupRequestDataType
  successCallback: () => void
  errorCallback: (error: any) => void
}

export class SignupService {
  requestData = ({
    requestData,
    successCallback,
    errorCallback,
  }: SignupServiceRequestType) => {
    return fetch(`${API_URL}/auth/signup`, {
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
