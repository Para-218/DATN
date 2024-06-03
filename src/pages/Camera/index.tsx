import { FC } from 'react'
import { CameraContent } from '../../components/CameraContent'
import { Header } from '../../components/Header'
import { Navigator } from '../../components/Navigators'
import './index.scss'

const Camera: FC = () => {
  return (
    <div className='web'>
      <Header />
      <div className='page'>
        <Navigator locate='cameras' />
        <div className='main-content'>
          <div className='camera-content'>
            <CameraContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Camera
