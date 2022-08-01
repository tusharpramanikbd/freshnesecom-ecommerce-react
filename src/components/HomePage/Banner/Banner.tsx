import {
  Box,
  Button,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Banner1 from '../../../assets/banners/banner-1.jpg'
import Banner2 from '../../../assets/banners/banner-2.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import BannerPropsType from '../../../@types/BannerPropsType'

const generateStyle = (
  theme: Theme,
  imgUrl: string | null,
  bannerNo: number,
  matchesMD: boolean,
  matchesSM: boolean
) => {
  return {
    rootComponentStyle: {
      width: '100%',
      height: !matchesMD ? '100%' : !matchesSM ? '350px' : '280px',
      borderRadius: '12px',
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
        imgUrl ? imgUrl : bannerNo === 1 ? Banner1 : Banner2
      })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: !matchesSM ? '32px' : '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    subHeadingStyle: {
      fontSize: '12px',
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
    headingStyle: {
      fontSize: '22px',
      fontWeight: 600,
      color: 'white',
    },
    buttonContainerStyle: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    buttonStyle: {
      color: 'white',
      textTransform: 'none',
    },
    arrowIconStyle: {
      marginBottom: '2px',
      color: theme.palette.primary.main,
    },
  }
}

const Banner = ({ bannerNo, imgUrl, subHeading, heading }: BannerPropsType) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyle(theme, imgUrl, bannerNo, matchesMD, matchesSM)
  return (
    <Box sx={classes.rootComponentStyle}>
      <Box>
        <Typography sx={classes.subHeadingStyle}>{subHeading}</Typography>
        <Typography sx={classes.headingStyle}>{heading}</Typography>
      </Box>
      <Box sx={classes.buttonContainerStyle}>
        <Button variant='outlined' color='primary' sx={classes.buttonStyle}>
          Read recepies <KeyboardArrowRightIcon sx={classes.arrowIconStyle} />
        </Button>
      </Box>
    </Box>
  )
}

export default Banner
