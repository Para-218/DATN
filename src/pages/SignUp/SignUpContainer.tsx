import { FC, FormEvent, useState } from 'react'
import { delay } from '../../functions/Delay'
import { APISignupResponse, ErrorMessage, oldAPIUrl } from '../../service'
import './index.scss'

const SignUpContainer: FC = () => {
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const signup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const apiUrl = oldAPIUrl + '/api/auth/signup'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          phone: phoneNumber,
          username: username,
          password: password
        })
      })
      if (response.status === 200) {
        const responseData = (await response.json()) as APISignupResponse
        setError(responseData.message)
        await delay(5000)
        window.location.href = '/login'
      } else if (response.status < 500) {
        const errorData = await response.json()
        const customError = errorData as ErrorMessage
        setError(customError.message)
      } else {
        setError('Server is not responding! Try again later!')
      }
    } catch (err) {
      setError('Something went wrong! Try again later!')
    }
  }

  return (
    <div className='signup-container'>
      <h1>Fire Detection</h1>
      <h2>Signup</h2>
      <form onSubmit={signup}>
        <input type='text' placeholder='Enter first name' onChange={(e) => setFirstname(e.target.value)} required />
        <input type='text' placeholder='Enter last name' onChange={(e) => setLastname(e.target.value)} required />
        <input type='text' placeholder='Enter phone number' onChange={(e) => setPhoneNumber(e.target.value)} required />
        <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} required />
        <input type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Sign Up</button>
      </form>
      <a href='/login'>Already have account? Login!</a>
      {error != '' && <p>{error}</p>}
    </div>
  )
}

export default SignUpContainer
