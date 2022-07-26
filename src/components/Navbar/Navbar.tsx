import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import NavbarMiddle from './NavbarMiddle'
import NavbarTop from './NavbarTop'

const Navbar = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box>
      {!matches && <NavbarTop />}
      <NavbarMiddle />
    </Box>
  )
}

export default Navbar
