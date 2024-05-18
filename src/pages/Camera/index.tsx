import { FC } from 'react'
import { Navigator } from '../../components/Navigators'
import { CameraContent } from '../../components/CameraContent'
import './index.scss'

const Camera: FC = () => {
  return (
    <div className='page'>
      <Navigator locate='cameras' />
      <div className='main-content'>
        <div className='camera-content'>
          <CameraContent />
        </div>
      </div>
    </div>
  )
}

export default Camera
