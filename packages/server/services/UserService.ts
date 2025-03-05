import axios, { AxiosInstance } from 'axios'

export interface User {
  id: number
  first_name: string
  second_name: string
  display_name: string | null
  login: string
  avatar: string | null
  email: string
  phone: string
  count: number
  level: number
}

export interface IUserService {
  signinWithCookie(cookieString: string): Promise<User>
}

const API_BASE_URL = 'http://localhost:3001/api/v2'
// const API_BASE_URL = 'https://ya-praktikum.tech/api/v2'

export class UserService implements IUserService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  async signinWithCookie(cookieString: string): Promise<User> {
    try {
      const response = await this.axiosInstance.get<User>('/auth/user', {
        headers: { Cookie: cookieString },
      })
      console.log(
        `Server UserService: User fetched: ${JSON.stringify(response.data)}`
      )
      return response.data
    } catch (error) {
      console.error(`Server UserService: Error: ${error}`)
      throw new Error(
        axios.isAxiosError(error) && error.response?.data?.reason
          ? error.response.data.reason
          : 'Ошибка авторизации по куке'
      )
    }
  }
}
