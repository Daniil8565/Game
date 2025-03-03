import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserService } from '../services/UserService'

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

export const loadSignin = createAsyncThunk<User>(
  'auth/loadSignin',
  async (_, thunkApi) => {
    const service = thunkApi.extra as IUserService
    return service.getCurrentUser()
  }
)

export const authByCode = createAsyncThunk<void, string>(
  'auth/authByCode',
  async (code, { dispatch, extra }) => {
    const service = extra as IUserService
    await service.loginWithCode(code)
    dispatch(loadSignin())
  }
)

// Новый thunk для авторизации по логину и паролю
export const signin = createAsyncThunk<
  User,
  { login: string; password: string },
  { rejectValue: string }
>('auth/signin', async ({ login, password }, { extra, rejectWithValue }) => {
  const service = extra as IUserService
  try {
    await service.signin({ login, password })
    // Если авторизация успешна, запрашиваем данные пользователя
    return await service.getCurrentUser()
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})

export const getJsonItemFromLocalStorage = (key: string) => {
  if (typeof localStorage === 'undefined') {
    return null // Возвращаем null на сервере
  }
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Ошибка парсинга localStorage ключа ${key}:`, error)
    return null
  }
}

const initialState: AuthState = {
  user: getJsonItemFromLocalStorage('user'),
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('user')
      }
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadSignin.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loadSignin.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(loadSignin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(signin.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
