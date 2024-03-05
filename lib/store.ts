import { configureStore } from '@reduxjs/toolkit'
import userProfileSlice from './features/userProfile/userProfileSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        // Add reducers here
        user: userProfileSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']