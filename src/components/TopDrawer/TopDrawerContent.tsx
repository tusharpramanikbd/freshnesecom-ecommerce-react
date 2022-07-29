import { Box, IconButton } from '@mui/material'
import React from 'react'
import WebsiteLogo from '../../icons/WebsiteLogo'
import SearchBox from '../SearchBox/SearchBox'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch } from '../../app/reduxHooks'
import { setIsTopDrawerOpen } from '../../features/TopDrawer/topDrawerSlice'

const generateStyle = () => {
  return {
    rootContainerStyle: {
      padding: '8px 16px 32px 16px',
    },
    topContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    },
    closeIconStyle: {
      color: 'red',
    },
    searchBoxContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
}

const TopDrawerContent = () => {
  const classes = generateStyle()

  const dispatch = useAppDispatch()

  const closeButtonHandler = () => {
    dispatch(setIsTopDrawerOpen({ isTopDrawerOpen: false }))
  }

  return (
    <Box sx={classes.rootContainerStyle}>
      <Box sx={classes.topContainerStyle}>
        <WebsiteLogo style={{ width: '140px', height: '14px' }} />
        <IconButton onClick={closeButtonHandler}>
          <CloseIcon sx={classes.closeIconStyle} />
        </IconButton>
      </Box>
      <Box sx={classes.searchBoxContainerStyle}>
        <SearchBox />
      </Box>
    </Box>
  )
}

export default TopDrawerContent
