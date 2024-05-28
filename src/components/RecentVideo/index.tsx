import { FC } from 'react'
import { FontSize } from '../../assets/theme'
import { ICameraProps } from '../../service'
import './index.scss'
import { SmallVideo } from './SmallCamera'

export const RecentVideo: FC<ICameraProps> = ({ listCameras }) => {
  const JSXsmallVideo = listCameras.map((camera, index) => (
    <SmallVideo key={index} id={camera.id} name={camera.name} description={camera.location} />
  ))
  return (
    <div className='recent-video'>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Nổi bật</p>
      <div>{JSXsmallVideo}</div>
    </div>
  )
}
