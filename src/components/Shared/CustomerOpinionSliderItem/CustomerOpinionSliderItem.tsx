import { Avatar, Box, Typography } from '@mui/material'
import CustomerOpinionType from '../../../@types/CustomerOpinionType'

const generateStyles = () => {
  return {
    rootContainerStyle: {
      width: '100%',
      padding: '24px',
    },
    innerContainerStyle: {
      textAlign: 'center',
      position: 'relative',
      borderRadius: '12px',
      border: '1px solid #D1D1D1',
      padding: '24px 22px',
    },
    reviewStyle: {
      fontSize: '15px',
      fontWeight: 500,
      marginBottom: '24px',
    },
    nameStyle: {
      fontSize: '12px',
      fontWeight: 600,
      marginBottom: '24px',
      color: '#A9A9A9',
    },
    avatarStyle: {
      position: 'absolute',
      bottom: '-10%',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  }
}

const CustomerOpinionSliderItem = ({
  name,
  avatar,
  review,
}: CustomerOpinionType) => {
  const classes = generateStyles()

  return (
    <Box sx={classes.rootContainerStyle}>
      <Box sx={classes.innerContainerStyle}>
        <Typography sx={classes.reviewStyle}>{review}</Typography>
        <Typography sx={classes.nameStyle}>{name}</Typography>
        <Avatar sx={classes.avatarStyle} alt={name} src={avatar} />
      </Box>
    </Box>
  )
}

export default CustomerOpinionSliderItem
