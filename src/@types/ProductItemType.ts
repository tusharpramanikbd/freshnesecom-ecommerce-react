interface ProductItemType {
  id: string
  title: string
  image: string
  shortDescription: string
  longDescription: string
  price: number
  discount: number | null
  discountedPrice: number | null
}

export default ProductItemType
