import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user'

export const rootStore = configureStore({
  reducer: {
    user: userReducer
  }
})

export type RootState = ReturnType<typeof rootStore.getState>

export type AppDispatch = typeof rootStore.dispatch
