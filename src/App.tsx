import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import MuiCustomTheme from './MuiCustomTheme'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <ThemeProvider theme={MuiCustomTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  )
}

export default App
