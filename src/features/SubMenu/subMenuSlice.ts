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
  isSubMenuVisible: boolean
}

interface SubMenuModel {
  top: number | null
  left: number | null
  subMenus: SubMenuItem[]
}

interface SubMenuVisibilityModel {
  isSubMenuVisible: boolean
}

export const initialState: SubMenuStateModel = {
  top: null,
  left: null,
  subMenus: [],
  isSubMenuVisible: false,
}

const subMenuSlice = createSlice({
  name: 'subMenu',
  initialState,
  reducers: {
    setSubMenuPosition: (state, action: PayloadAction<SubMenuModel>) => {
      state.top = action.payload.top
      state.left = action.payload.left
      state.subMenus = action.payload.subMenus
      state.isSubMenuVisible = true
    },
    setIsSubMenuVisible: (
      state,
      action: PayloadAction<SubMenuVisibilityModel>
    ) => {
      state.isSubMenuVisible = action.payload.isSubMenuVisible
    },
  },
})

export const { setSubMenuPosition, setIsSubMenuVisible } = subMenuSlice.actions

export const subMenuSelector = (state: RootState) => state.subMenu

export default subMenuSlice.reducer
