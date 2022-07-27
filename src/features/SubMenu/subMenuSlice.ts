import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export interface SubMenuStateModel {
  top: number | null
  left: number | null
}

export const initialState: SubMenuStateModel = {
  top: null,
  left: null,
}

const subMenuSlice = createSlice({
  name: 'subMenu',
  initialState,
  reducers: {
    setSubMenuPosition: (state, action: PayloadAction<SubMenuStateModel>) => {
      state.top = action.payload.top
      state.left = action.payload.left
    },
  },
})

export const { setSubMenuPosition } = subMenuSlice.actions

export const subMenuSelector = (state: RootState) => state.subMenu

export default subMenuSlice.reducer
