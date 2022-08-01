import { Grid } from '@mui/material'
import ProductItemContainer3XType from '../../../@types/ProductItemContainer3XType'
import ProductItem from '../ProductItem/ProductItem'

const ProductItemContainer3X = ({
  productItems,
}: ProductItemContainer3XType) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={{ xs: 2, md: 0 }}>
      {productItems.slice(0, 3).map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <ProductItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductItemContainer3X
