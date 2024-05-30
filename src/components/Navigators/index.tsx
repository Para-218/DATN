import { FC, useRef } from 'react'
import BellIcon from '../../assets/icon/Bell.png'
import CameraIcon from '../../assets/icon/Camera.png'
import HomeIcon from '../../assets/icon/Home.png'
import MenuIcon from '../../assets/icon/Menu.png'
import SettingIcon from '../../assets/icon/Setting.png'
import { Colors, FontSize } from '../../assets/theme'
import { INavigateProps } from '../../service'
import './index.scss'
import { MenuItem, UserItem } from './Item'

const first_item = { marginTop: '50px' }
const onLocate = { backgroundColor: Colors.MAIN1, fontSize: FontSize.REGULAR }
const combine = { backgroundColor: Colors.MAIN1, fontSize: FontSize.REGULAR, marginTop: '50px' }

export const Navigator: FC<INavigateProps> = (props: INavigateProps) => {
  const navigatorRef = useRef<HTMLDivElement | null>(null)
  const handleClickMenu = () => {
    if (navigatorRef.current) {
      navigatorRef.current.style.width = '245px'
      navigatorRef.current.style.position = 'fixed'
      navigatorRef.current.style.top = '0'
      navigatorRef.current.style.left = '0'
    }
  }

  if (props.locate === 'home') {
    return (
      <div>
        <button className='menu-button' onClick={handleClickMenu}>
          <img src={MenuIcon} alt='menu' style={{ width: '30px', height: '30px' }} />
        </button>
        <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator' ref={navigatorRef}>
          <UserItem />
          <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={combine} />
          <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} />
          <MenuItem name='Báo động' url='/notify' icon={BellIcon} />
          <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} />
        </div>
      </div>
    )
  } else if (props.locate === 'cameras') {
    return (
      <div>
        <button className='menu-button' onClick={handleClickMenu}>
          <img src={MenuIcon} alt='menu' style={{ width: '30px', height: '30px' }} />
        </button>
        <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator' ref={navigatorRef}>
          <UserItem />
          <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={first_item} />
          <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} style={onLocate} />
          <MenuItem name='Báo động' url='/notify' icon={BellIcon} />
          <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} />
        </div>
      </div>
    )
  } else if (props.locate === 'notifications') {
    return (
      <div>
        <button className='menu-button' onClick={handleClickMenu}>
          <img src={MenuIcon} alt='menu' style={{ width: '30px', height: '30px' }} />
        </button>
        <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator' ref={navigatorRef}>
          <UserItem />
          <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={first_item} />
          <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} />
          <MenuItem name='Báo động' url='/notify' icon={BellIcon} style={onLocate} />
          <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <button className='menu-button' onClick={handleClickMenu}>
          <img src={MenuIcon} alt='menu' style={{ width: '30px', height: '30px' }} />
        </button>
        <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator' ref={navigatorRef}>
          <UserItem />
          <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={first_item} />
          <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} />
          <MenuItem name='Báo động' url='/notify' icon={BellIcon} />
          <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} style={onLocate} />
        </div>
      </div>
    )
  }
}
