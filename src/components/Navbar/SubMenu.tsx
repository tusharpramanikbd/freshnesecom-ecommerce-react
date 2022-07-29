import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  useTheme,
} from '@mui/material'
import { useAppSelector } from '../../app/reduxHooks'
import { subMenuSelector } from '../../features/SubMenu/subMenuSlice'

const generateStyle = (
  theme: Theme,
  top: number | null,
  left: number | null
) => {
  return {
    rootContainerStyle: {
      width: '100%',
      maxWidth: '15rem',
      backgroundColor: 'white',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      position: 'absolute',
      top: top === null ? '13rem' : `${top}px`,
      left: left === null ? '17.5%' : `${left}px`,
      zIndex: '3',
      borderRadius: '0.25rem',
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
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  }
}

const SubMenu = ({ style }: any) => {
  const { top, left, subMenus } = useAppSelector(subMenuSelector)

  const theme = useTheme()
  const classes = generateStyle(theme, top, left)

  return (
    <Box style={style} sx={classes.rootContainerStyle}>
      <List disablePadding>
        {subMenus &&
          subMenus.map((item) => (
            <Box key={item.id}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.subMenu} sx={classes.textStyle} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </Box>
          ))}
      </List>
    </Box>
  )
}

export default SubMenu
