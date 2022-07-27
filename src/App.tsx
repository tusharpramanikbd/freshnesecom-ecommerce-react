import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import MuiCustomTheme from './MuiCustomTheme'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <ThemeProvider theme={MuiCustomTheme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
