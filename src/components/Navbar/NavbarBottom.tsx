import { Box, Button, Container, useMediaQuery } from '@mui/material'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

import menuCategoryData from '../../data/menuCategoryData'
import SubMenu from './SubMenu'

import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  setIsSubMenuVisible,
  setSubMenuPosition,
  subMenuSelector,
} from '../../features/SubMenu/subMenuSlice'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import closestEdge from '../../utils/MouseEvent'

const generateStyle = (matches: boolean) => {
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
      columnGap: '8px',
    },
    buttonStyle: {
      textTransform: 'none',
      fontSize: !matches ? '16px' : '14px',
      fontWeight: '500',
      padding: !matches ? '16px 16px' : '16px 12px',
    },
    arrowDownIconStyle: {
      marginLeft: '2px',
    },
    linkStyle: {
      textDecoration: 'none',
    },
  }
}

const NavbarBottom = () => {
  const matches = useMediaQuery('(max-width:1148px)')
  const classes = generateStyle(matches)
  const dispatch = useAppDispatch()
  const { isSubMenuVisible } = useAppSelector(subMenuSelector)

  const AnimatedSubMenu = animated(SubMenu)
  const transition = useTransition(isSubMenuVisible, {
    from: { x: 0, y: 10, opacity: 0, transform: 'translateX(-50%)' },
    enter: { x: 0, y: 0, opacity: 1, transform: 'translateX(-50%)' },
    leave: { x: 0, y: 10, opacity: 0, transform: 'translateX(-50%)' },
  })

  const handleMenuEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent?.trim()
    const tempBtn = e.currentTarget.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom

    const tempPage = menuCategoryData.find(({ menu }) => menu === text)

    if (tempPage) {
      setTimeout(() => {
        dispatch(
          setSubMenuPosition({
            top: bottom,
            left: center,
            subMenus: tempPage.subMenus,
          })
        )
      }, 150)
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
      dispatch(setIsSubMenuVisible({ isSubMenuVisible: false }))
    }
  }

  const handleMenuLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (closestEdge(e) !== 'bottom') {
      dispatch(setIsSubMenuVisible({ isSubMenuVisible: false }))
    }
  }

  return (
    <Box sx={classes.outerRootContainerStyle}>
      <Box
        id='navbar-bottom-container-outer'
        sx={classes.rootContainerStyle}
        onMouseOver={handleNavEnter}
      >
        <Container
          id='navbar-bottom-container'
          maxWidth='lg'
          sx={classes.innerContainerStyle}
          onMouseOver={handleNavEnter}
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
                  onMouseLeave={handleMenuLeave}
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
        {transition((style, item) => item && <AnimatedSubMenu style={style} />)}
      </Box>
    </Box>
  )
}

export default NavbarBottom
