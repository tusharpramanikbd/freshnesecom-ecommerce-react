import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomerOpinionSliderPropsType from '../../../@types/CustomerOpinionSliderPropsType'
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import CustomerOpinionSliderItem from '../CustomerOpinionSliderItem/CustomerOpinionSliderItem'
import CustomerOpinionSliderArrowRight from '../CustomerOpinionSliderArrow/CustomerOpinionSliderArrowRight'
import CustomerOpinionSliderArrowLeft from '../CustomerOpinionSliderArrow/CustomerOpinionSliderArrowLeft'
import { useRef } from 'react'

const generateStyles = (matchesMD: boolean, matchesSM: boolean) => {
  return {
    rootStyle: {
      width: '100%',
      position: 'relative',
      marginBottom: '48px',
    },
    skeletonStyle: {
      marginBottom: '6px',
      width: '150px',
      height: '150px',
      marginLeft: '31px',
    },
    titleTextStyle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: !matchesMD ? '24px' : '0',
    },
  }
}

const CustomerOpinionSlider = ({
  opinionData,
}: CustomerOpinionSliderPropsType) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyles(matchesMD, matchesSM)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: !matchesMD ? 3 : !matchesSM ? 2 : 1,
    slidesToScroll: 1,
    centerMode: true,
  }

  const sliderRef = useRef<Slider | null>(null)

  const onLeftArrowClickHandler = () => {
    sliderRef.current?.slickPrev()
  }

  const onRightArrowClickHandler = () => {
    sliderRef.current?.slickNext()
  }

  return (
    <Box sx={classes.rootStyle}>
      <Container>
        <Typography sx={classes.titleTextStyle}>Our customers says</Typography>
      </Container>
      <Slider ref={sliderRef} {...settings}>
        {opinionData &&
          opinionData.map((item) => (
            <CustomerOpinionSliderItem key={item.id} {...item} />
          ))}
      </Slider>
      <CustomerOpinionSliderArrowRight
        onMouseClick={onRightArrowClickHandler}
      />
      <CustomerOpinionSliderArrowLeft onMouseClick={onLeftArrowClickHandler} />
    </Box>
  )
}

export default CustomerOpinionSlider
