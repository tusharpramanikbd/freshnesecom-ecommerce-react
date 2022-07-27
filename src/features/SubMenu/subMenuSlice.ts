import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

interface SubMenuItem {
  id: string
  subMenu: string
}

export interface SubMenuStateModel {
  top: number | null
  left: number | null
  subMenus: SubMenuItem[]
}

export const initialState: SubMenuStateModel = {
  top: null,
  left: null,
  subMenus: [],
}

const subMenuSlice = createSlice({
  name: 'subMenu',
  initialState,
  reducers: {
    setSubMenuPosition: (state, action: PayloadAction<SubMenuStateModel>) => {
      state.top = action.payload.top
      state.left = action.payload.left
      state.subMenus = action.payload.subMenus
    },
  },
})

export const { setSubMenuPosition } = subMenuSlice.actions

export const subMenuSelector = (state: RootState) => state.subMenu

export default subMenuSlice.reducer
