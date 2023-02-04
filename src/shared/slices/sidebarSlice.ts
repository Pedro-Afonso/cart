import { RootState } from './../config/store'
import { createSlice } from '@reduxjs/toolkit'

interface IState {
  isSidebarOpen: boolean
}

const initialState: IState = {
  isSidebarOpen: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.isSidebarOpen = !state.isSidebarOpen
    }
  }
})

//  Actions
export const { toggleSidebar } = sidebarSlice.actions

//  Selector
export const selectIsSidebarOpen = (state: RootState) =>
  state.sidebar.isSidebarOpen

//  Reducer
export const { reducer: sidebarReducer } = sidebarSlice
