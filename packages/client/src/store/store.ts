import { configureStore } from '@reduxjs/toolkit'
import { IUserService } from '../services/UserService'
import authReducer from '../slices/authSlice'
import registrationReducer from '../slices/registrationSlice'

// Функция для создания стора с возможностью передачи сервиса и предзагруженного состояния
export const createStore = (preloadedState = {}, service?: IUserService) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      registration: registrationReducer,
    },
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: service, // Передаем сервис для API-запросов
        },
      }),
  })
}

// Клиентский стор по умолчанию (без сервиса на клиенте)
export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
