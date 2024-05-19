import { FC, useState, FormEvent } from 'react'
import './index.scss'
import { APISignupResponse, ErrorMessage } from '../../service'

const SignUpContainer: FC = () => {
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const signup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const apiUrl = 'https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/auth/signup'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          username: username,
          password: password
        })
      })
      if (!response.ok) {
        const errorData = await response.json()
        const customError = errorData as ErrorMessage
        setError(customError.message)
      } else {
        const responseData = (await response.json()) as APISignupResponse
        console.log(responseData.message)
        window.location.href = '/login'
      }
    } catch (err) {
      const customError = err as ErrorMessage
      setError(customError.message)
    }
  }

  return (
    <div className='signup-container'>
      <h1>Fire Detection</h1>
      <form onSubmit={signup}>
        <input type='text' placeholder='Enter first name' onChange={(e) => setFirstname(e.target.value)} required />
        <input type='text' placeholder='Enter last name' onChange={(e) => setLastname(e.target.value)} required />
        <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} required />
        <input type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Sign Up</button>
      </form>
      <a href='/login'>Already have account? Login!</a>
      {error != '' && <p>Something wrong!</p>}
    </div>
  )
}

export default SignUpContainer
