import { FC } from 'react'
import './index.scss'

interface IProps {
  name: string
  url: string
  icon: string
  style?: React.CSSProperties
}

export const MenuItem: FC<IProps> = (props: IProps) => {
  return (
    <div className='menu-item' style={props.style}>
      <a href={props.url}>
        <img src={props.icon} alt='User Icon' />
        <p>{props.name}</p>
      </a>
    </div>
  )
}
