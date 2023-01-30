import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { total: 0 },
  reducers: {
    increment: state => {
      state.total += 1
    }
  }
})

export const { increment } = cartSlice.actions

export const { reducer: cartReducer } = cartSlice
