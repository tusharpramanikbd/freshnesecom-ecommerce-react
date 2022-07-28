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
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import SearchIcon from '../../icons/SearchIcon'

const generateStyles = (theme: Theme, matches: boolean) => {
  return {
    searchContainer: {
      width: '510px',
      backgroundColor: '#F9F9F9',
      border: '1px solid #D1D1D1',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'row',
      paddingRight: matches === false ? '8px' : '0px',
      alignItems: 'center',
    },
    selectStyle: {
      width: matches === false ? '220px' : '150px',
      height: '40px',
      fontWeight: 'bold',
      fontSize: matches === false ? '1rem' : '12px',
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
      margin: matches === false ? '0 14px' : '0',
    },
    inputFieldStyle: {
      width: '250px',
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0px',
      },
      fontSize: matches === false ? '14px' : '12px',
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

const SearchBox = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = generateStyles(theme, matches)

  const [dropDownValue, setDropDownValue] = React.useState(data[0].value)

  const handleChange = (
    event: SelectChangeEvent,
    setDropdownValue: Dispatch<SetStateAction<string>>
  ) => {
    setDropdownValue(event.target.value)
  }

  return (
    <FormControl sx={classes.searchContainer}>
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
    </FormControl>
  )
}

export default SearchBox
