import { Grid } from '@mui/material'
import ProductItemContainerType from '../../../@types/ProductItemContainerType'
import ProductItem from '../ProductItem/ProductItem'

const ProductItemContainer4X = ({ productItems }: ProductItemContainerType) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={{ xs: 2, md: 0 }}>
      {productItems.slice(0, 4).map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          <ProductItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductItemContainer4X
