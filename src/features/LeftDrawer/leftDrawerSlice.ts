import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export interface LeftDrawerStateModel {
  isDrawerOpen: boolean
}

export const initialState: LeftDrawerStateModel = {
  isDrawerOpen: false,
}

const leftDrawerSlice = createSlice({
  name: 'leftDrawer',
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<LeftDrawerStateModel>) => {
      state.isDrawerOpen = action.payload.isDrawerOpen
    },
  },
})

export const { setIsDrawerOpen } = leftDrawerSlice.actions

export const leftDrawerSelector = (state: RootState) => state.leftDrawer

export default leftDrawerSlice.reducer
