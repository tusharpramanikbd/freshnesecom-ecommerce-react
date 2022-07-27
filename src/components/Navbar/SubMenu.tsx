import { Box, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { subMenuSelector } from '../../features/SubMenu/subMenuSlice'

const generateStyle = (top: number | null, left: number | null) => {
  return {
    rootContainerStyle: {
      width: '200px',
      height: '200px',
      backgroundColor: 'white',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      position: 'absolute',
      top: top === null ? '13rem' : `${top}px`,
      left: left === null ? '17.5%' : `${left}px`,
      transform: 'translateX(-50%)',
      zIndex: '3',
      padding: '2rem',
      borderRadius: '0.75rem',
      '&::before': {
        content: '""',
        display: 'block',
        width: '0',
        height: '0',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid #FFFFFF',
        position: 'absolute',
        top: '-5px',
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
    textStyle: {
      fontSize: '20px',
    },
  }
}

const SubMenu = () => {
  const { top, left, subMenus } = useAppSelector(subMenuSelector)

  const classes = generateStyle(top, left)

  return (
    <Box sx={classes.rootContainerStyle}>
      {subMenus &&
        subMenus.map((item) => (
          <Typography key={item.id} sx={classes.textStyle}>
            {item.subMenu}
          </Typography>
        ))}
    </Box>
  )
}

export default SubMenu
