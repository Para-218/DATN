import { FC, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/styles/app.css'
import './assets/styles/app.scss'
import Calculator from './pages/Calculator'
import Camera from './pages/Camera'
import EditProfile from './pages/EditProfile'
import Home from './pages/Home/home'
import Login from './pages/Login'
import Notification from './pages/Notification'
import SignUp from './pages/SignUp'
import Statistic from './pages/Statistic'

const App: FC = () => {
  const isLogin =
    localStorage.getItem('username') && localStorage.getItem('roles') && localStorage.getItem('token') ? true : false

  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      console.log('hello')
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={isLogin ? <Home count={count} /> : <Login />} />
          <Route path='/home' element={isLogin ? <Home count={count} /> : <Login />} />
          <Route path='/login' element={isLogin ? <Home count={count} /> : <Login />} />
          <Route path='/signup' element={isLogin ? <Home count={count} /> : <SignUp />} />
          <Route path='/statistic' element={isLogin ? <Statistic /> : <Login />} />
          <Route path='/calculator' element={isLogin ? <Calculator /> : <Login />} />
          <Route path='/camera' element={isLogin ? <Camera /> : <Login />} />
          <Route path='/editprofile' element={isLogin ? <EditProfile /> : <Login />} />
          <Route path='/notify' element={isLogin ? <Notification /> : <Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
