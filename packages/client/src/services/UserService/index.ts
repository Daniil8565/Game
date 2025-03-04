import axios, { AxiosInstance } from 'axios'
import { User } from '../../slices/authSlice'
import { RegistrationData } from '../../slices/registrationSlice'

// const API_BASE_URL = 'https://ya-praktikum.tech/api/v2'
const API_BASE_URL = 'http://localhost:3001/api/v2'

export class UserService implements IUserService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  async getCurrentUser(): Promise<User> {
    try {
      const response = await this.axiosInstance.get<User>('/auth/user')
      return response.data
    } catch (error) {
      throw new Error(
        axios.isAxiosError(error) && error.response?.data?.reason
          ? error.response.data.reason
          : 'Ошибка получения данных пользователя'
      )
    }
  }

  async loginWithCode(code: string): Promise<void> {
    try {
      await this.axiosInstance.post('/oauth/yandex', {
        code,
        redirect_uri: 'http://localhost:3000/signin',
      })
    } catch (error) {
      throw new Error(
        axios.isAxiosError(error) && error.response?.data?.reason
          ? error.response.data.reason
          : 'Ошибка авторизации через код'
      )
    }
  }

  async signup(data: RegistrationData): Promise<User> {
    try {
      const response = await this.axiosInstance.post<User>('/auth/signup', data)
      return response.data
    } catch (error) {
      throw new Error(
        axios.isAxiosError(error) && error.response?.data?.reason
          ? error.response.data.reason
          : 'Ошибка регистрации'
      )
    }
  }

  async signin(data: { login: string; password: string }): Promise<void> {
    console.log(`signin data: ${JSON.stringify(data)}`)

    try {
      await this.axiosInstance.post('/auth/signin', data)
    } catch (error) {
      throw new Error(
        axios.isAxiosError(error) && error.response?.data?.reason
          ? error.response.data.reason
          : 'Ошибка авторизации'
      )
    }
  }

  async signinWithCookie(cookieString: string): Promise<User> {
    try {
      // Исправление: передаём полную строку куки в заголовке
      const response = await this.axiosInstance.get<User>('/auth/user', {
        headers: cookieString ? { Cookie: cookieString } : {}, // Используем переданную строку куки
      })

      return response.data
    } catch (error) {
      console.error(`signinWithCookie error: ${error}`)
      throw new Error(
        axios.isAxiosError(error) && error.response?.data?.reason
          ? error.response.data.reason
          : 'Ошибка авторизации по куке'
      )
    }
  }
}

export interface IUserService {
  getCurrentUser(): Promise<User>
  loginWithCode(code: string): Promise<void>
  signup(data: RegistrationData): Promise<User>
  signin(data: { login: string; password: string }): Promise<void>
  signinWithCookie(cookieString: string): Promise<User>
}
