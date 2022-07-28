import { Box, Button, Container } from '@mui/material'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

import menuCategoryData from '../../data/menuCategoryData'
import SubMenu from './SubMenu'
import { useState } from 'react'

import { useAppDispatch } from '../../app/reduxHooks'
import { setSubMenuPosition } from '../../features/SubMenu/subMenuSlice'
import { Link } from 'react-router-dom'

const generateStyle = () => {
  return {
    outerRootContainerStyle: {
      display: 'flex',
      flexDirection: 'column',
    },
    rootContainerStyle: {
      backgroundColor: '#F9F9F9',
    },
    innerContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainerStyle: {
      display: 'flex',
      columnGap: '16px',
      padding: '0 16px',
    },
    buttonStyle: {
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: '500',
      padding: '16px 16px',
    },
    arrowDownIconStyle: {
      marginLeft: '2px',
    },
    emptyBoxStyle: {
      width: '100%',
      height: '16px',
    },
    linkStyle: {
      textDecoration: 'none',
    },
  }
}

const NavbarBottom = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false)
  const classes = generateStyle()
  const dispatch = useAppDispatch()

  const handleMenuEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent?.trim()
    const tempBtn = e.currentTarget.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3

    const tempPage = menuCategoryData.find(({ menu }) => menu === text)

    if (tempPage) {
      dispatch(
        setSubMenuPosition({
          top: bottom,
          left: center,
          subMenus: tempPage.subMenus,
        })
      )
      setIsSubMenuVisible(true)
    }
  }

  const handleNavEnter = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement

    if (
      element.tagName === 'DIV' &&
      (element.getAttribute('id') === 'navbar-bottom' ||
        element.getAttribute('id') === 'navbar-bottom-container' ||
        element.getAttribute('id') === 'navbar-bottom-container-outer')
    ) {
      setIsSubMenuVisible(false)
    }
  }

  const handleEmptyBoxEnter = () => {
    setIsSubMenuVisible(false)
  }

  return (
    <Box sx={classes.outerRootContainerStyle}>
      <Box onMouseOver={handleEmptyBoxEnter} sx={classes.emptyBoxStyle}></Box>
      <Box id='navbar-bottom-container-outer' sx={classes.rootContainerStyle}>
        <Container
          id='navbar-bottom-container'
          maxWidth='lg'
          sx={classes.innerContainerStyle}
        >
          <Box
            id='navbar-bottom'
            onMouseOver={handleNavEnter}
            sx={classes.menuContainerStyle}
          >
            {menuCategoryData.map((item) => (
              <Link to={item.link} key={item.id} style={classes.linkStyle}>
                <Button
                  onMouseEnter={handleMenuEnter}
                  color='secondary'
                  sx={classes.buttonStyle}
                >
                  {item.menu}{' '}
                  <ArrowDownIcon style={classes.arrowDownIconStyle} />
                </Button>
              </Link>
            ))}
          </Box>
        </Container>
        {isSubMenuVisible && <SubMenu />}
      </Box>
    </Box>
  )
}

export default NavbarBottom
