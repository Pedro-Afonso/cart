import { IProduct } from './../services/productApi'
import { RootState } from './../config/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IItem {
  product: IProduct
  quantity: number
}

interface ICartState {
  items: IItem[]
}

const initialState: ICartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.items.find(
        item => item.product.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.items.unshift({ product: action.payload, quantity: 1 })
      }
    },
    subProduct: (state, action: PayloadAction<number>) => {
      const itemInCart = state.items.find(
        item => item.product.id === action.payload
      )
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity--
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const filteredItems = state.items.filter(
        item => item.product.id !== action.payload
      )
      state.items = filteredItems
    }
  }
})

//  Actions
export const { addProduct, subProduct, removeProduct } = cartSlice.actions

//  Selector
export const selectItems = (state: RootState) => state.cart.items

//  Reducer
export const { reducer: cartReducer } = cartSlice
