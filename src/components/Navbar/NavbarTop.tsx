import { Box, Button, Container, Divider } from '@mui/material'
import { Link } from 'react-router-dom'

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
    linkStyle: {
      textDecoration: 'none',
    },
  }
}

const NavbarTop = () => {
  const classes = generateStyle()

  return (
    <Container maxWidth='lg'>
      <Box sx={classes.rootContainerStyle}>
        <Box sx={classes.innerContainerStyle}>
          <Link to='/chat' style={classes.linkStyle}>
            <Button color='primary' size='small' sx={classes.buttonStyle}>
              Chat with us
            </Button>
          </Link>
          <Link to='/call' style={classes.linkStyle}>
            <Button color='primary' size='small' sx={classes.buttonStyle}>
              +420 336 775 664
            </Button>
          </Link>
          <Link to='/email' style={classes.linkStyle}>
            <Button color='primary' size='small' sx={classes.buttonStyle}>
              info@freshnesecom.com
            </Button>
          </Link>
        </Box>
        <Box sx={classes.innerContainerStyle}>
          <Link to='/blog' style={classes.linkStyle}>
            <Button color='primary' size='small' sx={classes.buttonStyle}>
              Blog
            </Button>
          </Link>
          <Link to='/aboutus' style={classes.linkStyle}>
            <Button color='primary' size='small' sx={classes.buttonStyle}>
              About Us
            </Button>
          </Link>
          <Link to='/careers' style={classes.linkStyle}>
            <Button color='primary' size='small' sx={classes.buttonStyle}>
              Careers
            </Button>
          </Link>
        </Box>
      </Box>
      <Divider sx={classes.dividerStyle} />
    </Container>
  )
}

export default NavbarTop
