import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
  Theme,
  useTheme,
} from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import SearchIcon from '../../icons/SearchIcon'

const generateStyles = (theme: Theme) => {
  return {
    searchContainer: {
      width: '510px',
      backgroundColor: '#F9F9F9',
      border: '1px solid #D1D1D1',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'row',
      paddingRight: '13px',
      alignItems: 'center',
    },
    selectStyle: {
      width: '220px',
      height: '40px',
      fontWeight: 'bold',
      textAlign: 'center',
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0px',
      },
      '& .MuiSelect-icon': {
        color: theme.palette.primary.main,
      },
    },
    verticalDivider: {
      width: '1px',
      height: '25px',
      backgroundColor: '#D1D1D1',
      margin: '0 14px',
    },
    inputFieldStyle: {
      width: '250px',
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0px',
      },
      fontSize: '14px',
    },
    iconStyle: {
      width: '18px',
      height: '18px',
    },
  }
}

const data = [
  {
    id: '1',
    value: 'All Categories',
  },
  {
    id: '2',
    value: 'Bekary',
  },
  {
    id: '3',
    value: 'Fruits and vegetables',
  },
  {
    id: '4',
    value: 'Meat and fish',
  },
  {
    id: '5',
    value: 'Drinks',
  },
]

const ResponsiveFormControl = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const SearchBox = () => {
  const theme = useTheme()
  const classes = generateStyles(theme)

  const [dropDownValue, setDropDownValue] = React.useState(data[0].value)

  const handleChange = (
    event: SelectChangeEvent,
    setDropdownValue: Dispatch<SetStateAction<string>>
  ) => {
    setDropdownValue(event.target.value)
  }

  return (
    <ResponsiveFormControl sx={classes.searchContainer}>
      <Select
        onChange={(event: SelectChangeEvent) =>
          handleChange(event, setDropDownValue)
        }
        value={dropDownValue}
        sx={classes.selectStyle}
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
      <Box sx={classes.verticalDivider}></Box>
      <TextField
        variant='outlined'
        sx={classes.inputFieldStyle}
        placeholder='Search Products, categories...'
        inputProps={{
          style: {
            height: '7px',
            fontSize: '14px',
          },
        }}
      />
      <IconButton aria-label='search'>
        <SearchIcon style={classes.iconStyle} />
      </IconButton>
    </ResponsiveFormControl>
  )
}

export default SearchBox
