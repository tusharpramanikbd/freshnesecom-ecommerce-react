import { Box } from '@mui/material'
import React from 'react'
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer'
import Navbar from '../../components/Navbar/Navbar'
import TopDrawer from '../../components/TopDrawer/TopDrawer'

const generateStyle = () => {
  return {
    rootContainerStyle: {
      width: '100%',
      minHeight: '100vh',
      // backgroundColor: '#f4c2c2',
    },
  }
}

const HomePage = () => {
  const classes = generateStyle()

  return (
    <Box sx={classes.rootContainerStyle}>
      <Navbar />
      <LeftDrawer />
      <TopDrawer />
    </Box>
  )
}

export default HomePage
