import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material'
import menuCategoryData from '../../../data/menuCategoryData'
import ProductItemContainer3X from '../../Shared/ProductItemContainer3X/ProductItemContainer3X'
import CategoryListSection from '../CategoryListSection/CategoryListSection'
import productData from '../../../data/productData'

const generateStyle = (matchesMD: boolean) => {
  return {
    rootComponentStyle: {
      width: '100%',
      margin: matchesMD ? '16px 0' : '64px auto',
    },
    boxStyle: {
      width: '100%',
      height: '100%',
    },
  }
}

const BestFromFarmerSection = () => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const classes = generateStyle(matchesMD)

  return (
    <Container sx={classes.rootComponentStyle}>
      <Grid
        container
        columnSpacing={{ md: 4 }}
        rowSpacing={{ xs: 2, md: 0 }}
        sx={{ height: '100%' }}
      >
        <Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
          <Box sx={classes.boxStyle}>
            <CategoryListSection
              categoryTitle='Best from Farmers'
              categoryData={menuCategoryData}
              buttonText='More products'
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={9} order={{ xs: 1, md: 2 }}>
          <Box sx={classes.boxStyle}>
            <ProductItemContainer3X productItems={productData} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BestFromFarmerSection
