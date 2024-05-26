import { FC } from 'react'
import background from '../../assets/images/background-login.png'
import './index.scss'
import LoginContainer from './LoginContainer'

const Login: FC = () => {
  return (
    <div className='page' style={{ backgroundImage: `url(${background})` }}>
      <LoginContainer />
    </div>
  )
}

export default Login
