import { API_URL } from '@/constants'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type User = {
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

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

// функция для безопасного чтения JSON из localStorage
const getJsonItemFromLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key)
    console.log(`item ${item}`)

    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Ошибка парсинга localStorage ключа ${key}:`, error)
    return null
  }
}

const initialState: AuthState = {
  user: getJsonItemFromLocalStorage('user'), // Восстанавливаем данные из localStorage
  loading: false,
  error: null,
}
// функция для обработки запросов
const fetchForUserAuth = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      credentials: 'include',
    })
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.reason || `Ошибка HTTP: ${response.status}`)
    }
    // Проверяем заголовок ответа
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return await response.json()
    } else {
      // Если ответ не в формате JSON – возвращаем текст
      return await response.text()
    }
  } catch (error: any) {
    console.error(`Ошибка запроса к ${url}:`, error.message)
    throw error
  }
}

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchForUserAuth('/auth/user', { method: 'GET' })
    } catch (error: any) {
      console.error('Ошибка при получении данных пользователя:', error.message)
      return rejectWithValue(error.message)
    }
  }
)

export const signin = createAsyncThunk(
  'auth/signin',
  async (
    { login, password }: { login: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      await fetchForUserAuth('/auth/signin', {
        method: 'POST',
        body: JSON.stringify({ login, password }),
      })
      // Если авторизация успешна, запрашиваем данные пользователя
      await dispatch(fetchUserData())
    } catch (error: any) {
      console.error('Ошибка при входе:', error.message)
      return rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null
      // Очищаем данные пользователя из localStorage
      localStorage.removeItem('user')
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signin.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(signin.fulfilled, state => {
        state.loading = false
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload as string
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
