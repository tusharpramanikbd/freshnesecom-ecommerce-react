import { Box, Button, Theme, Typography, useTheme } from '@mui/material'
import ProductItemType from '../../../@types/ProductItemType'

const generateStyle = (theme: Theme) => {
  return {
    rootComponentStyle: {
      width: '100%',
      border: '1px solid #D1D1D1',
      borderRadius: '12px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'all 0.3s linear',
      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
        cursor: 'pointer',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
    },
    buttonContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '8px',
    },
    imageContainerStyle: {
      width: '100%',
      height: '180px',
      position: 'relative',
    },
    imageStyle: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '12px',
    },
    titleStyle: {
      fontSize: '15px',
      fontWeight: 500,
      marginTop: '12px',
    },
    descriptionStyle: {
      fontSize: '12px',
      fontWeight: 400,
      color: '#575757',
      marginTop: '4px',
    },
    priceContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      columnGap: '8px',
      fontSize: '18px',
      marginTop: '4px',
    },
    priceStyle: {
      fontSize: '18px',
      fontWeight: 600,
    },
    priceDisableStyle: {
      color: '#A9A9A9',
      textDecoration: 'line-through',
      textDecorationColor: 'red',
    },
    discountStyle: {
      position: 'absolute',
      top: '8px',
      left: '8px',
      backgroundColor: '#F4F8EC',
      borderRadius: '12px',
      padding: '0 8px',
      color: theme.palette.primary.main,
      fontSize: '12px',
      fontWeight: 600,
    },
  }
}

const ProductItem = ({
  title,
  image,
  shortDescription,
  price,
  discount,
  discountedPrice,
}: ProductItemType) => {
  const theme = useTheme()
  const classes = generateStyle(theme)

  return (
    <Box sx={classes.rootComponentStyle}>
      <Box>
        <Box sx={classes.imageContainerStyle}>
          <img src={image} alt={title} style={classes.imageStyle} />
          {discount && (
            <Typography sx={classes.discountStyle}>-{discount}%</Typography>
          )}
        </Box>
        <Typography sx={classes.titleStyle}>{title}</Typography>
        <Typography sx={classes.descriptionStyle}>
          {shortDescription.length > 40
            ? shortDescription.slice(0, 40).concat('...')
            : shortDescription}
        </Typography>
        <Box sx={classes.priceContainerStyle}>
          <Typography
            sx={
              !discountedPrice
                ? classes.priceStyle
                : [classes.priceStyle, classes.priceDisableStyle]
            }
          >
            {price} USD
          </Typography>
          <Typography sx={classes.priceStyle}>
            {discountedPrice} {discountedPrice && 'USD'}
          </Typography>
        </Box>
      </Box>
      <Box sx={classes.buttonContainerStyle}>
        <Button variant='contained' size='small' color='primary'>
          Add to cart
        </Button>
        <Button variant='contained' size='small' color='primary'>
          Buy now
        </Button>
      </Box>
    </Box>
  )
}

export default ProductItem
