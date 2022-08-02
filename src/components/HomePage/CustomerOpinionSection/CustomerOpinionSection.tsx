import { Box } from '@mui/material'
import CustomerOpinionSlider from '../../Shared/CustomerOpinionSlider/CustomerOpinionSlider'
import customerOpinionData from '../../../data/customerOpinionData'

const CustomerOpinionSection = () => {
  return (
    <Box>
      <CustomerOpinionSlider opinionData={customerOpinionData} />
    </Box>
  )
}

export default CustomerOpinionSection
