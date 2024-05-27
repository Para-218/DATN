import { FC } from 'react'
import { Navigator } from '../../components/Navigators'
import './index.scss'
import { NotificationContainer } from './NotificationContainer'

const Notification: FC = () => {
  return (
    <div className='page'>
      <Navigator locate='notifications' />
      <div className='main-content'>
        <div className='notify-content'>
          <NotificationContainer />
        </div>
      </div>
    </div>
  )
}

export default Notification
