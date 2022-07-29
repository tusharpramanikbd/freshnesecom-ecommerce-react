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
import { useAppDispatch } from '../../app/reduxHooks'
import { setIsLeftDrawerOpen } from '../../features/LeftDrawer/leftDrawerSlice'
import { Link } from 'react-router-dom'
import { setIsTopDrawerOpen } from '../../features/TopDrawer/topDrawerSlice'
import { setIsSubMenuVisible } from '../../features/SubMenu/subMenuSlice'

const generateStyle = (matches: boolean) => {
  return {
    rootContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8px',
      marginBottom: matches ? '8px' : '32px',
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
    linkStyle: {
      textDecoration: 'none',
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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const classes = generateStyle(matches)

  const dispatch = useAppDispatch()

  const menuIconClickHandler = () => {
    dispatch(setIsLeftDrawerOpen({ isLeftDrawerOpen: true }))
  }

  const searchIconClickHandler = () => {
    dispatch(setIsTopDrawerOpen({ isTopDrawerOpen: true }))
  }

  const handleComponentMouseOver = () => {
    dispatch(setIsSubMenuVisible({ isSubMenuVisible: false }))
  }

  return (
    <Container onMouseOver={handleComponentMouseOver} maxWidth='lg'>
      <Box sx={classes.rootContainerStyle}>
        {!matches ? (
          <WebsiteLogo />
        ) : (
          <WebsiteLogo style={{ width: '140px', height: '14px' }} />
        )}
        <Box sx={classes.searchboxContainerStyle}>
          {!matches && <SearchBox />}
        </Box>
        <Box>
          <CustomInvisibleIconButton onClick={searchIconClickHandler}>
            <SearchIcon style={classes.searchIconStyle} />
          </CustomInvisibleIconButton>
          <Link to='/login' style={classes.linkStyle}>
            <CustomVisibleIconButton>
              <UserIcon />
            </CustomVisibleIconButton>
          </Link>
          <Link to='/cart' style={classes.linkStyle}>
            <CustomVisibleIconButton>
              <Badge badgeContent={4} color='primary'>
                <CartIcon />
              </Badge>
            </CustomVisibleIconButton>
          </Link>
          <CustomInvisibleIconButton onClick={menuIconClickHandler}>
            <MenuIcon sx={classes.menuIconStyle} />
          </CustomInvisibleIconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default NavbarMiddle
