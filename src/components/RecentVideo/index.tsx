import { FC } from 'react'
import { FontSize } from '../../assets/theme'
import './index.scss'
import { SmallVideo } from './Item'

export const RecentVideo: FC = () => {
  return (
    <div className='recent-video'>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Xem gần đây</p>
      <div>
        <SmallVideo
          url='/alola'
          name='Camera 1'
          description='Rừng Amazon ở Brazil, Ecuador, Venezuela, Suriname, Peru, Colombia, Bolivia, Guyana và Guiana'
        />
        <SmallVideo
          url='/alola'
          name='Camera 1'
          description='Rừng Amazon ở Brazil, Ecuador, Venezuela, Suriname, Peru, Colombia, Bolivia, Guyana và Guiana'
        />
        <SmallVideo
          url='/alola'
          name='Camera 1'
          description='Rừng Amazon ở Brazil, Ecuador, Venezuela, Suriname, Peru, Colombia, Bolivia, Guyana và Guiana'
        />
        <SmallVideo
          url='/alola'
          name='Camera 1'
          description='Rừng Amazon ở Brazil, Ecuador, Venezuela, Suriname, Peru, Colombia, Bolivia, Guyana và Guiana'
        />
      </div>
    </div>
  )
}
