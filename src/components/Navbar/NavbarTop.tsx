import { Box, Button, Container, Divider } from '@mui/material'

const generateStyle = () => {
  return {
    rootContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
    },
    innerContainerStyle: {
      display: 'flex',
      columnGap: '20px',
      textTransform: 'none',
    },
    buttonStyle: {
      textTransform: 'none',
    },
    dividerStyle: {
      margin: '0 0 24px 0',
    },
  }
}

const NavbarTop = () => {
  const classes = generateStyle()

  return (
    <Container maxWidth='lg'>
      <Box sx={classes.rootContainerStyle}>
        <Box sx={classes.innerContainerStyle}>
          <Button color='primary' size='small' sx={classes.buttonStyle}>
            Chat with us
          </Button>
          <Button color='primary' size='small' sx={classes.buttonStyle}>
            +420 336 775 664
          </Button>
          <Button color='primary' size='small' sx={classes.buttonStyle}>
            info@freshnesecom.com
          </Button>
        </Box>
        <Box sx={classes.innerContainerStyle}>
          <Button color='primary' size='small' sx={classes.buttonStyle}>
            Blog
          </Button>
          <Button color='primary' size='small' sx={classes.buttonStyle}>
            About Us
          </Button>
          <Button color='primary' size='small' sx={classes.buttonStyle}>
            Careers
          </Button>
        </Box>
      </Box>
      <Divider sx={classes.dividerStyle} />
    </Container>
  )
}

export default NavbarTop
