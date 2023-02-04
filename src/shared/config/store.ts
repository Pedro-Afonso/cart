import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'

import { sidebarReducer } from '@/slices/sidebarSlice'
import { cartReducer } from '@/slices/cartSlice'
import { productApi } from '@/services'

const rootReducer = combineReducers({
  cart: cartReducer,
  sidebar: sidebarReducer,
  [productApi.reducerPath]: productApi.reducer
})

// eslint-disable-next-line no-use-before-define
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: gDM => gDM().concat(productApi.middleware),
    devTools: true
  })

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
