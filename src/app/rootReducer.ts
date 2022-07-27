import { combineReducers } from '@reduxjs/toolkit'
import subMenuReducer from '../features/SubMenu/subMenuSlice'
import leftDrawerReducer from '../features/LeftDrawer/leftDrawerSlice'

const rootReducer = combineReducers({
  subMenu: subMenuReducer,
  leftDrawer: leftDrawerReducer,
})

export default rootReducer
