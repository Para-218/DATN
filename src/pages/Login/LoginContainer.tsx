import { FC } from 'react'
import './index.scss'

const LoginContainer: FC = () => {
  return (
    <div className='login-container'>
      <h1>Fire Detection</h1>
      <h2>Welcome!</h2>
      <form>
        <input type='text' placeholder='Enter username' />
        <input type='password' placeholder='Enter password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginContainer
