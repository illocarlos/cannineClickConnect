import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme.context'
import UserMessage from './components/UserMessage/UserMessage'


function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      {/* {theme == "dark" && <style>
        {`html {background-color: black;}`}
      </style>} */}
      <Navigation />
      <AppRoutes />
      <Footer />
      <UserMessage />
    </div>
  )

}

export default App
