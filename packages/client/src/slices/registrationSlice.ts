import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserService } from '../services/UserService'
import { User } from './authSlice'

export interface RegistrationData {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export interface RegistrationState {
  loading: boolean
  error: string | null
  success: boolean
  user: User | null
}

const initialState: RegistrationState = {
  loading: false,
  error: null,
  success: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (data: RegistrationData, { rejectWithValue, extra }) => {
    const service = extra as IUserService
    try {
      return await service.signup(data)
    } catch (error: any) {
      console.error('Ошибка при регистрации пользователя:', error.message)
      return rejectWithValue(error.message)
    }
  }
)

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    // Редьюсер для сброса состояния регистрации, включая данные пользователя
    resetRegistration: state => {
      state.loading = false
      state.error = null
      state.success = false
      state.user = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true
        state.error = null
      })
      // При успешном выполнении запроса:
      // - Сбрасываем флаг загрузки
      // - Устанавливаем флаг успеха
      // - Сохраняем полученные данные пользователя в state.user
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.user = action.payload
      })
      // Если произошла ошибка:
      // - Сбрасываем флаг загрузки
      // - Сохраняем сообщение об ошибке
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default registrationSlice.reducer
export const { resetRegistration } = registrationSlice.actions
