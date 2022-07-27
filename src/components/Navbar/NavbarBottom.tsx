import { Box, Button, Container } from '@mui/material'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

import menuCategoryData from '../../data/menuCategoryData'
import SubMenu from './SubMenu'
import { useState } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { setSubMenuPosition } from '../../features/SubMenu/subMenuSlice'

const generateStyle = () => {
  return {
    rootContainerStyle: {
      backgroundColor: '#F9F9F9',
      padding: '8px',
      marginBottom: '16px',
    },
    innerContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainerStyle: {
      display: 'flex',
      columnGap: '16px',
    },
    buttonStyle: {
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: '500',
    },
    arrowDownIconStyle: {
      marginLeft: '2px',
    },
  }
}

const NavbarBottom = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false)
  const classes = generateStyle()
  const dispatch = useAppDispatch()

  const handleMenuEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent
    const tempBtn = e.currentTarget.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3

    dispatch(setSubMenuPosition({ top: bottom, left: center }))

    setIsSubMenuVisible(true)
  }
  // const handleMenuLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e.currentTarget.textContent)
  //   setIsSubMenuVisible(false)
  // }

  return (
    <Box sx={classes.rootContainerStyle}>
      <Container maxWidth='lg' sx={classes.innerContainerStyle}>
        <Box sx={classes.menuContainerStyle}>
          {menuCategoryData.map((item) => (
            <Button
              onMouseOver={handleMenuEnter}
              // onMouseLeave={handleMenuLeave}
              key={item.id}
              color='secondary'
              sx={classes.buttonStyle}
            >
              {item.menu} <ArrowDownIcon style={classes.arrowDownIconStyle} />
            </Button>
          ))}
        </Box>
      </Container>
      {isSubMenuVisible && <SubMenu />}
    </Box>
  )
}

export default NavbarBottom
