import { FC } from 'react'
import { Navigator } from '../../components/Navigators'
import { RecentVideo } from '../../components/RecentVideo'
import { SmallNotify } from '../../components/SmallNotify'
import { SmallStatistic } from '../../components/SmallStatistic'
import './home.scss'

const Home: FC = () => {
  return (
    <div className='page'>
      <Navigator locate='home' />
      <div className='main-content'>
        <div className='upper-div'>
          <SmallStatistic />
          <SmallNotify />
        </div>
        <div className='lower-div'>
          <RecentVideo />
        </div>
      </div>
    </div>
  )
}

export default Home
