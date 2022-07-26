import { createTheme } from '@mui/material'

const MuiCustomTheme = createTheme({
  palette: {
    primary: {
      main: '#6A983C',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: '"Roboto" , "Helevetica" , "Arial" , sans-serif ',
  },
})

export default MuiCustomTheme
