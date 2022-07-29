import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  useTheme,
} from '@mui/material'
import React from 'react'
import WebsiteLogo from '../../icons/WebsiteLogo'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch } from '../../app/reduxHooks'
import { setIsLeftDrawerOpen } from '../../features/LeftDrawer/leftDrawerSlice'
import Collapse from '@mui/material/Collapse'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import menuCategoryData from '../../data/menuCategoryData'

const generateStyle = (theme: Theme) => {
  return {
    topContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      padding: '8px',
    },
    closeIconStyle: {
      color: 'red',
    },
    textStyle: {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    arrowIconStyle: {
      color: theme.palette.primary.main,
    },
  }
}

const LeftDrawerContent = () => {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({})
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const classes = generateStyle(theme)

  const handleClick = (id: string) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }

  const closeButtonHandler = () => {
    dispatch(setIsLeftDrawerOpen({ isLeftDrawerOpen: false }))
  }

  return (
    <Box sx={{ width: '250px' }}>
      <Box sx={classes.topContainerStyle}>
        <WebsiteLogo style={{ width: '140px', height: '14px' }} />
        <IconButton onClick={closeButtonHandler}>
          <CloseIcon sx={classes.closeIconStyle} />
        </IconButton>
      </Box>
      <List sx={{ width: '100%' }}>
        {menuCategoryData &&
          menuCategoryData.map((item) => (
            <Box key={item.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleClick(item.id)}>
                  <ListItemText primary={item.menu} sx={classes.textStyle} />
                  {open[item.id] ? (
                    <ExpandLess sx={classes.arrowIconStyle} />
                  ) : (
                    <ExpandMore sx={classes.arrowIconStyle} />
                  )}
                </ListItemButton>
              </ListItem>
              <Divider />
              <Collapse in={open[item.id]} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {item.subMenus &&
                    item.subMenus.map((subItem) => (
                      <Box key={subItem.id}>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText
                              primary={subItem.subMenu}
                              sx={classes.textStyle}
                            />
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                      </Box>
                    ))}
                </List>
              </Collapse>
            </Box>
          ))}
      </List>
    </Box>
  )
}

export default LeftDrawerContent
