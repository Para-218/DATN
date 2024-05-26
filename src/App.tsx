import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Calculator from './pages/Calculator'
import Camera from './pages/Camera'
import Home from './pages/Home/home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Statistic from './pages/Statistic'
import EditProfile from './pages/EditProfile'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const isLogin =
    localStorage.getItem('username') && localStorage.getItem('roles') && localStorage.getItem('token') ? true : false
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={isLogin ? <Home /> : <Login />} />
          <Route path='/home' element={isLogin ? <Home /> : <Login />} />
          <Route path='/login' element={isLogin ? <Home /> : <Login />} />
          <Route path='/signup' element={isLogin ? <Home /> : <SignUp />} />
          <Route path='/statistic' element={isLogin ? <Statistic /> : <Login />} />
          <Route path='/calculator' element={isLogin ? <Calculator /> : <Login />} />
          <Route path='/camera' element={isLogin ? <Camera /> : <Login />} />
          <Route path='/editprofile' element={isLogin ? <EditProfile /> : <Login />} />
          <Route path='/notify' element={<p>Notification</p>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
