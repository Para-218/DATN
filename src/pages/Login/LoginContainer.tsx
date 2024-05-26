import { FC, useState, FormEvent } from 'react'
import './index.scss'
import { APISigninResponse, ErrorMessage } from '../../service'

const LoginContainer: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const signin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const apiUrl = 'https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/auth/signin'

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
      if (!response.ok) {
        const errorData = await response.json()
        const customError = errorData as ErrorMessage
        setError(customError.message)
      } else {
        const responseData = (await response.json()) as APISigninResponse
        console.log(responseData)
        localStorage.setItem('token', responseData.accessToken)
        localStorage.setItem('username', responseData.username)
        localStorage.setItem('roles', responseData.roles[0])
        window.location.href = '/home'
      }
    } catch (err) {
      const customError = err as ErrorMessage
      setError(customError.message)
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
      <a href='/signup'>Not have account? sign up!</a>
      {error != '' && <p>Invalid username, password</p>}
    </div>
  )
}

export default LoginContainer
