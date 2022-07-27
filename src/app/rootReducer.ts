import { combineReducers } from '@reduxjs/toolkit'
import subMenuReducer from '../features/SubMenu/subMenuSlice'

const rootReducer = combineReducers({
  subMenu: subMenuReducer,
})

export default rootReducer
