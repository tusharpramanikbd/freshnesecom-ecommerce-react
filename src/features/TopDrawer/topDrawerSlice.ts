import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export interface TopDrawerStateModel {
  isTopDrawerOpen: boolean
}

export const initialState: TopDrawerStateModel = {
  isTopDrawerOpen: false,
}

const topDrawerSlice = createSlice({
  name: 'topDrawer',
  initialState,
  reducers: {
    setIsTopDrawerOpen: (state, action: PayloadAction<TopDrawerStateModel>) => {
      state.isTopDrawerOpen = action.payload.isTopDrawerOpen
    },
  },
})

export const { setIsTopDrawerOpen } = topDrawerSlice.actions

export const topDrawerSelector = (state: RootState) => state.topDrawer

export default topDrawerSlice.reducer
