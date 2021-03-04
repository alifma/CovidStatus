import { BrowserRouter } from 'react-router-dom'
import Router from './router/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
      <Footer />
    </BrowserRouter>
  )
}

export default App;