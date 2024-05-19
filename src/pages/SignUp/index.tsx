import { FC } from 'react'
import background from '../../assets/images/background-login.png'
import './index.scss'
import SignUpContainer from './SignUpContainer'

const SignUp: FC = () => {
  return (
    <div className='page' style={{ backgroundImage: `url(${background})` }}>
      <SignUpContainer />
    </div>
  )
}

export default SignUp
