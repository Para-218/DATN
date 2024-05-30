import { FC, useEffect, useState } from 'react'
import { Navigator } from '../../components/Navigators'
import { FormEditProfile } from './EditProfileContainer'
import { oldAPIUrl, APIGetAUserResponse, ErrorMessage } from '../../service'
import './index.scss'

const EditProfile: FC = () => {
  const [first_name, setFirstname] = useState<string>('')
  const [last_name, setLastname] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  useEffect(() => {
    console.log('2000')
    const username = localStorage.getItem('username')
    const apiUrl = oldAPIUrl + `/api/users/?username=${username}`
    const fetchUserData = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const json = (await response.json()) as APIGetAUserResponse[]
        setFirstname(json[0].first_name)
        setLastname(json[0].last_name)
        setPhone(json[0].phone)
      } else {
        const json = (await response.json()) as ErrorMessage
        console.log(json.message)
      }
    }
    try {
      fetchUserData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className='page'>
      <Navigator locate='home' />
      <div className='main-content'>
        <div className='edit-profile-content'>
          <FormEditProfile firstname={first_name} lastname={last_name} phoneNumber={phone} />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
