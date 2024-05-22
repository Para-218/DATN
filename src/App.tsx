import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Calculator from './pages/Calculator'
import Camera from './pages/Camera'
import Home from './pages/Home/home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Statistic from './pages/Statistic'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/statistic' element={<Statistic />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/camera' element={<Camera />} />
          <Route path='/notify' element={<p>Notification</p>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
