import {
  Box,
  Button,
  Container,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ProductItemContainer4X from '../../Shared/ProductItemContainer4X/ProductItemContainer4X'
import productData from '../../../data/productData'

const generateStyle = (matchesMD: boolean, theme: Theme) => {
  return {
    rootComponentStyle: {
      width: '100%',
      margin: matchesMD ? '16px 0' : '0 auto',
      marginBottom: '32px',
    },
    sectionTopStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '32px',
    },
    buttonStyle: {
      textTransform: 'none',
    },
    iconStyle: {
      marginBottom: '2px',
      color: theme.palette.primary.main,
    },
    titleTextStyle: {
      fontSize: '18px',
      fontWeight: 600,
    },
  }
}

const OurProductsSection = () => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const classes = generateStyle(matchesMD, theme)

  return (
    <Container sx={classes.rootComponentStyle}>
      <Box sx={classes.sectionTopStyle}>
        <Typography sx={classes.titleTextStyle}>Our Products</Typography>
        <Button variant='outlined' color='primary' sx={classes.buttonStyle}>
          See all Products <KeyboardArrowRightIcon sx={classes.iconStyle} />
        </Button>
      </Box>
      <ProductItemContainer4X productItems={productData} />
    </Container>
  )
}

export default OurProductsSection
