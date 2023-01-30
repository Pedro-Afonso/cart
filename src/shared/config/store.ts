import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'

import { productApi } from '@/shared/services'

import { cartReducer } from '@/shared/slices/cartSlice'
import { authReducer } from '@/shared/slices/authSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      cart: cartReducer,
      auth: authReducer
    },
    middleware: gDM => gDM().concat(productApi.middleware),
    devTools: true
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper(makeStore)
