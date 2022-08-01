import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useAppDispatch } from '../../app/reduxHooks'
import BestFromFarmerSection from '../../components/HomePage/BestFromFarmerSection/BestFromFarmerSection'
import BestSellingProductsSection from '../../components/HomePage/BestSellingProductsSection/BestSellingProductsSection'
import HomeCategorySection from '../../components/HomePage/HomeCategorySection/HomeCategorySection'
import { setIsSubMenuVisible } from '../../features/SubMenu/subMenuSlice'

const generateStyle = (matches: boolean) => {
  return {
    rootContainerStyle: {
      width: '100%',
      minHeight: matches ? 'calc(100vh - 56px)' : 'calc(100vh - 213.75px)',
    },
  }
}

const HomePage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const classes = generateStyle(matches)
  const dispatch = useAppDispatch()

  const handleComponentMouseOver = () => {
    dispatch(setIsSubMenuVisible({ isSubMenuVisible: false }))
  }

  return (
    <Box onMouseOver={handleComponentMouseOver} sx={classes.rootContainerStyle}>
      <HomeCategorySection />
      <BestSellingProductsSection />
      <BestFromFarmerSection />
    </Box>
  )
}

export default HomePage
