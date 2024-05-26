import { FC } from 'react'
import { Navigator } from '../../components/Navigators'
import { FormEditProfile } from './EditProfileContainer'
import './index.scss'

const EditProfile: FC = () => {
  return (
    <div className='page'>
      <Navigator locate='home' />
      <div className='main-content'>
        <div className='edit-profile-content'>
          <FormEditProfile />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
