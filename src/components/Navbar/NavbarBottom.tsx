import { Box, Button, Container } from '@mui/material'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

import menuCategoryData from '../../data/menuCategoryData'

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
  const classes = generateStyle()

  return (
    <Box sx={classes.rootContainerStyle}>
      <Container maxWidth='lg' sx={classes.innerContainerStyle}>
        <Box sx={classes.menuContainerStyle}>
          {menuCategoryData.map((item) => (
            <Button key={item.id} color='secondary' sx={classes.buttonStyle}>
              {item.menu} <ArrowDownIcon style={classes.arrowDownIconStyle} />
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default NavbarBottom
