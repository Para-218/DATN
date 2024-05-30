import { FC, FormEvent, useState } from 'react'
import { APISigninError, APISigninResponse, oldAPIUrl } from '../../service'
import './index.scss'

const LoginContainer: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const signin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const apiUrl = oldAPIUrl + '/api/auth/signin'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      if (response.status === 200) {
        const responseData = (await response.json()) as APISigninResponse
        localStorage.setItem('token', responseData.accessToken)
        localStorage.setItem('username', responseData.username)
        localStorage.setItem('roles', responseData.roles[0])
        localStorage.setItem('recentVideo', '')
        window.location.href = '/home'
      } else if (response.status < 500) {
        const errorData = await response.json()
        const customError = errorData as APISigninError
        setError(customError.message)
      } else {
        setError('Server is not responding! Try again later!')
      }
    } catch (err) {
      setError('Something went wrong! Try again later!')
    }
  }

  return (
    <div className='login-container'>
      <h1>Fire Detection</h1>
      <h2>Welcome!</h2>
      <form onSubmit={signin}>
        <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} required />
        <input type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Login</button>
      </form>
      <a href='/signup'>Not have account? Sign up!</a>
      {error != '' && <p>{error}</p>}
    </div>
  )
}

export default LoginContainer
