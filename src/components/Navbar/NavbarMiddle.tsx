import { Badge, Box, Container, IconButton, styled } from '@mui/material'
import React from 'react'
import CartIcon from '../../icons/CartIcon'
import SearchIcon from '../../icons/SearchIcon'
import UserIcon from '../../icons/UserIcon'
import WebsiteLogo from '../../icons/WebsiteLogo'
import SearchBox from '../SearchBox/SearchBox'
import MenuIcon from '@mui/icons-material/Menu'

const generateStyle = () => {
  return {
    rootContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8px',
    },
    searchboxContainerStyle: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchIconStyle: {
      width: '24px',
      height: '24px',
    },
    iconStyle: {
      marginLeft: '20px',
    },
    menuIconStyle: {
      color: '#151515',
    },
  }
}

const CustomSearchIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
  },
}))

const NavbarMiddle = () => {
  const classes = generateStyle()

  return (
    <Container maxWidth='lg'>
      <Box sx={classes.rootContainerStyle}>
        <WebsiteLogo />
        <Box sx={classes.searchboxContainerStyle}>
          <SearchBox />
        </Box>
        <Box>
          <CustomSearchIconButton>
            <SearchIcon style={classes.searchIconStyle} />
          </CustomSearchIconButton>
          <IconButton sx={classes.iconStyle}>
            <UserIcon />
          </IconButton>
          <IconButton sx={classes.iconStyle}>
            <Badge badgeContent={4} color='primary'>
              <CartIcon />
            </Badge>
          </IconButton>
          <CustomSearchIconButton sx={classes.iconStyle}>
            <MenuIcon sx={classes.menuIconStyle} />
          </CustomSearchIconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default NavbarMiddle
