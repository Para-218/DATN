import './index.scss'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()
  const pathName = location.pathname
  const navigate = pathName.split('/')[1]

  return (
    <div className='header'>
      <h1>{navigate}</h1>
    </div>
  )
}
