import { ErrorMessage, APIEditProfileResponse } from '../../service'
import { FC, useState } from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const FormEditProfile: FC = () => {
  const [first_name, setFirstname] = useState<String>('')
  const [last_name, setLastname] = useState<String>('')
  const [phone, setPhone] = useState<String>('')
  const [password, setPassword] = useState<String>('')

  const handleEditProfile = async () => {
    const username = String(localStorage.getItem('username'))
    const tokenAccess = localStorage.getItem('token')
    const apiUrl = `https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/users/${username}`

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
        const responseData = (await response.json()) as APIEditProfileResponse
        console.log(responseData.message)
      } else if (response.status === 409) {
        const errorData = (await response.json()) as ErrorMessage
        console.log(errorData.message)
      }
    } catch (err) {
      const customError = err as ErrorMessage
      console.log(customError.message)
    }
    return
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-button' onClick={handleEditProfile}>
          &times;
        </button>
        <form>
          <label>
            Nhập họ:
            <input type='text' onChange={(e) => setFirstname(e.target.value)} placeholder='Nguyễn' />
          </label>
          <label>
            Nhập tên:
            <input type='text' onChange={(e) => setLastname(e.target.value)} placeholder='A' />
          </label>
          <label>
            Nhập số điện thoại:
            <input type='number' onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label>
            Nhập mật khẩu xác nhận:
            <input type='password' onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type='submit'>Thay đổi</button>
        </form>
      </div>
    </div>
  )
}

export default FormEditProfile
