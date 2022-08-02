import { Box, Theme, useTheme } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CustomerOpinionSliderArrowPropsType from '../../../@types/CustomerOpinionSliderArrowPropsType'

const generateStyles = (theme: Theme) => {
  return {
    rootStyle: {
      width: '32px',
      height: '48px',
      backgroundColor: '#000000',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px',
      position: 'absolute',
      right: '0',
      top: '60%',
      transform: 'translateY(-60%)',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.palette.primary.main,
      },
    },
    iconStyle: {
      color: '#FFFFFF',
    },
  }
}

const CustomerOpinionSliderArrowRight = ({
  onMouseClick,
}: CustomerOpinionSliderArrowPropsType) => {
  const theme = useTheme()
  const classes = generateStyles(theme)

  return (
    <Box sx={classes.rootStyle} onClick={() => onMouseClick()}>
      <ArrowForwardIosIcon sx={classes.iconStyle} />
    </Box>
  )
}

export default CustomerOpinionSliderArrowRight
