import { ErrorMessage, APIEditProfileResponse, oldAPIUrl } from '../../service'
import { FC, useState, FormEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { delay } from '../../functions/Delay'

export const FormEditProfile: FC = () => {
  const [first_name, setFirstname] = useState<string>('')
  const [last_name, setLastname] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleEditProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = String(localStorage.getItem('username'))
    const tokenAccess = localStorage.getItem('token')
    const apiUrl = oldAPIUrl + `/api/users/${username}`

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${tokenAccess}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          phone: phone,
          password: password
        })
      })
      if (response.status === 200) {
        ;(await response.json()) as APIEditProfileResponse
        setError('Đã chỉnh sửa thành công')
        await delay(5000)
        window.location.href = '/login'
      } else if (response.status === 409) {
        const errorData = (await response.json()) as ErrorMessage
        setError(errorData.message)
      }
    } catch (err) {
      setError('Something went wrong! Please try again.')
    }
    return
  }

  return (
    <div>
      <h1>Chỉnh sửa thông tin cá nhân</h1>
      <form onSubmit={handleEditProfile}>
        <label>
          Chỉnh sửa họ:
          <input type='text' onChange={(e) => setFirstname(e.target.value)} placeholder='Nguyễn' />
        </label>
        <label>
          Chỉnh sửa tên:
          <input type='text' onChange={(e) => setLastname(e.target.value)} placeholder='A' />
        </label>
        <label>
          Chỉnh sửa số điện thoại:
          <input type='text' onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Chỉnh sửa mật khẩu:
          <input type='password' onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit'>Thay đổi</button>
      </form>
      {error != '' && <p>{error}</p>}
    </div>
  )
}

export default FormEditProfile
