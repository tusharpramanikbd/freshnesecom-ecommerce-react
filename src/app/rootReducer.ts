import { combineReducers } from '@reduxjs/toolkit'
import subMenuReducer from '../features/SubMenu/subMenuSlice'
import leftDrawerReducer from '../features/LeftDrawer/leftDrawerSlice'
import topDrawerReducer from '../features/TopDrawer/topDrawerSlice'

const rootReducer = combineReducers({
  subMenu: subMenuReducer,
  leftDrawer: leftDrawerReducer,
  topDrawer: topDrawerReducer,
})

export default rootReducer
