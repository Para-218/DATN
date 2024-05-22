import { FC } from 'react'
import background from '../../assets/images/background-login.png'
import './index.scss'
import LoginContainer from './LoginContainer'

const Login: FC = () => {
  if (localStorage.getItem('username') && localStorage.getItem('roles') && localStorage.getItem('token')) {
    window.location.href = '/home'
  }
  return (
    <div className='page' style={{ backgroundImage: `url(${background})` }}>
      <LoginContainer />
    </div>
  )
}

export default Login
