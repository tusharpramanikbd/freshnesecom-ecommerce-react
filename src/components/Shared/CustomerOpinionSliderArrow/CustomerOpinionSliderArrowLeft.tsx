import { Box, Theme, useTheme } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CustomerOpinionSliderArrowPropsType from '../../../@types/CustomerOpinionSliderArrowPropsType'

const generateStyles = (theme: Theme) => {
  return {
    rootStyle: {
      width: '32px',
      height: '48px',
      backgroundColor: '#000000',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px',
      position: 'absolute',
      left: '0',
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

const CustomerOpinionSliderArrowLeft = ({
  onMouseClick,
}: CustomerOpinionSliderArrowPropsType) => {
  const theme = useTheme()
  const classes = generateStyles(theme)

  return (
    <Box sx={classes.rootStyle} onClick={() => onMouseClick()}>
      <ArrowBackIosNewIcon sx={classes.iconStyle} />
    </Box>
  )
}

export default CustomerOpinionSliderArrowLeft
