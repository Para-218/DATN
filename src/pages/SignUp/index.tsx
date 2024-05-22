import { FC } from 'react'
import background from '../../assets/images/background-login.png'
import './index.scss'
import SignUpContainer from './SignUpContainer'

const SignUp: FC = () => {
  if (localStorage.getItem('username') && localStorage.getItem('roles') && localStorage.getItem('token')) {
    window.location.href = '/home'
  }
  return (
    <div className='page' style={{ backgroundImage: `url(${background})` }}>
      <SignUpContainer />
    </div>
  )
}

export default SignUp
