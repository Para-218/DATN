import { FC } from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown'
import UserIcon from '../../../assets/icon/User.png'
import { handleLogout } from '../Logout'

interface IProps {
  name: string
  url: string
  icon: string
  style?: React.CSSProperties
}

const username = localStorage.getItem('username') || 'Anonymous'

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

export const UserItem: FC = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        <div className='user-item'>
          <div>
            <img src={UserIcon} alt='User Icon' />
            <p>{username}</p>
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='#/action-1'>Edit profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
