import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authState: false,
  authUser: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload
    }
  }
})

export const { setAuthState, setAuthUser } = authSlice.actions

export const { reducer: authReducer } = authSlice
