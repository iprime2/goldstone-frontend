import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './app.scss'
import User from './pages/User/User'
import Navbar from './components/Navbar'
import Create from './pages/Create/Create'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/user/create' element={<Create />} />
      </Routes>
    </HashRouter>
  )
}

export default App
