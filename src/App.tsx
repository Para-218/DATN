import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import Home from '@pages/Home/home'
import Camera from '@pages/Camera'
import Statistic from '@pages/Statistic'
import Login from '@pages/Login'

const App: FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/statistic' element={<Statistic />} />
          <Route path='/camera' element={<Camera />} />
          <Route path='/notify' element={<p>Notification</p>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
