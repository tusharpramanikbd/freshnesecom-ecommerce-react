import {
  Box,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Link } from 'react-router-dom'
import productTagList from '../../data/productTagList'

const generateStyle = (matchesMD: boolean, theme: Theme) => {
  return {
    rootContainerStyle: {
      backgroundColor: '#F1F1F1',
    },
    containerStyle: {
      padding: !matchesMD ? '24px 0' : '24px 16px',
    },
    topSectionContainerStyle: {
      marginBottom: '16px',
    },
    containerTitleStyle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '8px',
    },
    linkStyle: {
      textDecoration: 'none',
    },
    linkTextStyle: {
      color: theme.palette.primary.main,
      fontSize: '14px',
      fontWeight: 400,
      marginBottom: '4px',
    },
    tagContainerStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '16px',
      rowGap: '8px',
    },
    tagContainerTitleStyle: {
      marginBottom: '8px',
    },
    tagItemStyle: {
      backgroundColor: '#F9F9F9',
      borderRadius: '12px',
      padding: '4px 10px',
      fontSize: '12px',
      fontWeight: 600,
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
    },
    bottomSectionContainer: {
      marginBottom: '16px',
    },
    copyrightSectionStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    copyrightTextStyle: {
      fontSize: '14px',
      fontWeight: 400,
    },
  }
}

const Footer = () => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const classes = generateStyle(matchesMD, theme)
  const currentYear = new Date().getFullYear()

  return (
    <Box sx={classes.rootContainerStyle}>
      <Container sx={classes.containerStyle}>
        {/* Top Section */}
        <Grid
          container
          columnSpacing={2}
          rowSpacing={{ xs: 2, lg: 0 }}
          sx={classes.topSectionContainerStyle}
        >
          <Grid item xs={6} md={6} lg={3}>
            <Box>
              <Typography sx={classes.containerTitleStyle}>
                Get in touch
              </Typography>
              <Link to='/aboutus' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>About Us</Typography>
              </Link>
              <Link to='/careers' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Careers</Typography>
              </Link>
              <Link to='/press' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>
                  Press Releases
                </Typography>
              </Link>
              <Link to='/blog' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Blog</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box>
              <Typography sx={classes.containerTitleStyle}>
                Connections
              </Typography>
              <Link to='/facebook' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Facebook</Typography>
              </Link>
              <Link to='/twitter' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Twitter</Typography>
              </Link>
              <Link to='/instagram' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Instagram</Typography>
              </Link>
              <Link to='/youtybe' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Youtube</Typography>
              </Link>
              <Link to='/linkedin' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>LinkedIn</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box>
              <Typography sx={classes.containerTitleStyle}>Earnings</Typography>
              <Link to='/affiliate' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>
                  Become an Affiliate
                </Typography>
              </Link>
              <Link to='/advertiseproduct' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>
                  Advertise your product
                </Typography>
              </Link>
              <Link to='/sellonmarket' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>
                  Sell on Market
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box>
              <Typography sx={classes.containerTitleStyle}>Account</Typography>
              <Link to='/youraccount' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Your account</Typography>
              </Link>
              <Link to='/returnscenter' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>
                  Returns Centre
                </Typography>
              </Link>
              <Link to='/purchaseprotection' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>
                  100 % purchase protection
                </Typography>
              </Link>
              <Link to='/chat' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Chat with us</Typography>
              </Link>
              <Link to='/help' style={classes.linkStyle}>
                <Typography sx={classes.linkTextStyle}>Help</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        {/* End of Top Section */}

        {/* Middle Section */}
        <Box sx={classes.bottomSectionContainer}>
          <Typography sx={classes.containerTitleStyle}>Product tags</Typography>
          <Box sx={classes.tagContainerStyle}>
            {productTagList.map((item) => (
              <Typography sx={classes.tagItemStyle} key={item.id}>
                {item.tag}
              </Typography>
            ))}
          </Box>
        </Box>
        {/* End of Middle Section */}

        {/* Bottom Section */}
        <Box sx={classes.copyrightSectionStyle}>
          <Typography sx={classes.copyrightTextStyle}>
            Copyright &copy; {currentYear} Freshnesecom
          </Typography>
        </Box>
        {/* End of Bottom Section */}
      </Container>
    </Box>
  )
}

export default Footer
