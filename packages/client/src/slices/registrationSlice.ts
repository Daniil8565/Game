// import { API_URL } from "@/constants";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchForUserAuth } from './authSlice'

export interface RegistrationData {
  first_name: 'string'
  second_name: 'string'
  login: 'string'
  email: 'string'
  password: 'string'
  phone: 'string'
}

export interface RegistrationState {
  loading: boolean
  error: string | null
  success: boolean
}

const initialState: RegistrationState = {
  loading: false,
  error: null,
  success: false,
}

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (data: RegistrationData, { rejectWithValue }) => {
    try {
      const result = await fetchForUserAuth('/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      return result
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
    resetRegistration: state => {
      state.loading = false
      state.error = null
      state.success = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false
        state.success = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default registrationSlice.reducer
export const { resetRegistration } = registrationSlice.actions
