import { FC, useEffect, useState } from 'react'
import { Navigator } from '../../components/Navigators'
import { RecentVideo } from '../../components/RecentVideo'
import { SmallNotify } from '../../components/SmallNotify'
import { SmallStatistic } from '../../components/SmallStatistic'
import { APIListCameraResponse, ErrorMessage } from '../../service'
import './home.scss'

const Home: FC = () => {
  const [listCameras, setListCameras] = useState<{ id: number; name: string; location: string; ip_address: string }[]>(
    []
  )

  useEffect(() => {
    const username = localStorage.getItem('username')
    const apiUrl = `https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/users/${username}/cameras`
    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = (await response.json()) as APIListCameraResponse[]
        setListCameras(
          data.map((data) => {
            return { id: data.id, name: data.name, location: data.location, ip_address: data.ip_address }
          })
        )
      } else {
        const error = (await response.json()) as ErrorMessage
        console.log(error.message)
      }
    }

    try {
      fetchCameras()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className='page'>
      <Navigator locate='home' />
      <div className='main-content'>
        <div className='upper-div'>
          <SmallStatistic listCameras={listCameras} />
          <SmallNotify />
        </div>
        <div className='lower-div'>
          <RecentVideo listCameras={listCameras} />
        </div>
      </div>
    </div>
  )
}

export default Home
