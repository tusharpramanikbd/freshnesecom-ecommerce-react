import {
  Badge,
  Box,
  Container,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material'
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
      marginBottom: '32px',
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

const CustomInvisibleIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
    marginLeft: '0',
  },
}))

const CustomVisibleIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
  },
}))

const NavbarMiddle = () => {
  const classes = generateStyle()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth='lg'>
      <Box sx={classes.rootContainerStyle}>
        {!matches ? (
          <WebsiteLogo />
        ) : (
          <WebsiteLogo style={{ width: '140px', height: '14px' }} />
        )}
        <Box sx={classes.searchboxContainerStyle}>
          <SearchBox />
        </Box>
        <Box>
          <CustomInvisibleIconButton>
            <SearchIcon style={classes.searchIconStyle} />
          </CustomInvisibleIconButton>
          <CustomVisibleIconButton>
            <UserIcon />
          </CustomVisibleIconButton>
          <CustomVisibleIconButton>
            <Badge badgeContent={4} color='primary'>
              <CartIcon />
            </Badge>
          </CustomVisibleIconButton>
          <CustomInvisibleIconButton>
            <MenuIcon sx={classes.menuIconStyle} />
          </CustomInvisibleIconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default NavbarMiddle
