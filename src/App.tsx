import { Button, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchBox from './components/SearchBox/SearchBox'
import MuiCustomTheme from './MuiCustomTheme'

function App() {
  return (
    <ThemeProvider theme={MuiCustomTheme}>
      <CssBaseline />
      <SearchBox />
    </ThemeProvider>
  )
}

export default App
