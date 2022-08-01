import { Box, Button, Theme, Typography, useTheme } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import menuCategoryData from '../../../data/menuCategoryData'
import { Link } from 'react-router-dom'

const generateStyle = (theme: Theme) => {
  return {
    rootComponentStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '12px',
      padding: '1rem',
    },
    buttonStyle: {
      backgroundColor: '#F5F5F5',
      textTransform: 'none',
      fontSize: '0.938rem',
      fontWeight: 700,
    },
    CategoryMenuTitleStyle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    menuStyle: {
      display: 'block',
      marginBottom: '0.75rem',
      fontSize: '0.875rem',
      color: theme.palette.primary.main,
    },
  }
}

const CategoryListSection = () => {
  const theme = useTheme()
  const classes = generateStyle(theme)

  return (
    <Box sx={classes.rootComponentStyle}>
      <Box>
        <Typography sx={classes.CategoryMenuTitleStyle}>
          Category Menu
        </Typography>
        {menuCategoryData.slice(0, 5).map((item) => (
          <Link to={item.link} key={item.id} style={classes.menuStyle}>
            {item.menu}
          </Link>
        ))}
      </Box>
      <Button sx={classes.buttonStyle}>
        More categories <KeyboardArrowRightIcon />{' '}
      </Button>
    </Box>
  )
}

export default CategoryListSection
