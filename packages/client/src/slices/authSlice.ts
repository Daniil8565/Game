import { API_URL } from '@/constants'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  user: null | { login: string }
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'), // Восстанавливаем данные из localStorage
  loading: false,
  error: null,
}

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/auth/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }

      return await response.json()
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
      const requestData = { login, password }
      const response = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.reason || `Ошибка HTTP: ${response.status}`)
      }

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
