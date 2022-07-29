import { CssBaseline, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LeftDrawer from './components/LeftDrawer/LeftDrawer'
import Navbar from './components/Navbar/Navbar'
import TopDrawer from './components/TopDrawer/TopDrawer'
import MuiCustomTheme from './MuiCustomTheme'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <ThemeProvider theme={MuiCustomTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
      <LeftDrawer />
      <TopDrawer />
    </ThemeProvider>
  )
}

export default App
