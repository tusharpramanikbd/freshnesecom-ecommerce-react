import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  topDrawerSelector,
  setIsTopDrawerOpen,
} from '../../features/TopDrawer/topDrawerSlice'
import TopDrawerContent from './TopDrawerContent'
import { useMediaQuery, useTheme } from '@mui/material'

const TopDrawer = () => {
  const { isTopDrawerOpen } = useAppSelector(topDrawerSelector)
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    if (matches) {
      dispatch(setIsTopDrawerOpen({ isTopDrawerOpen: false }))
    }
  }, [matches])

  return (
    <Drawer
      anchor='top'
      open={isTopDrawerOpen}
      onClose={() => dispatch(setIsTopDrawerOpen({ isTopDrawerOpen: false }))}
    >
      <TopDrawerContent />
    </Drawer>
  )
}

export default TopDrawer
