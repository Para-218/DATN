import { FC } from 'react'
import './index.scss'
import { FontSize } from '../../../assets/theme'

interface IProps {
  name: string
  url: string
  description: string
  style?: React.CSSProperties
}

export const SmallVideo: FC<IProps> = (props: IProps) => {
  return (
    <a className='small-video' href={props.url} style={props.style}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s' />
      <div className='smaller-video'>
        <p style={{ fontSize: FontSize.REGULAR }}>{props.name}</p>
        <p style={{ fontSize: FontSize.TINY }}>{props.description}</p>
      </div>
    </a>
  )
}
