import { FC } from 'react'
import BellIcon from '../../assets/icon/Bell.png'
import CameraIcon from '../../assets/icon/Camera.png'
import HomeIcon from '../../assets/icon/Home.png'
import SettingIcon from '../../assets/icon/Setting.png'
import { Colors, FontSize } from '../../assets/theme'
import { IProps } from '../../service'
import './index.scss'
import { MenuItem, UserItem } from './Item'

const first_item = { marginTop: '50px' }
const onLocate = { backgroundColor: Colors.MAIN1, fontSize: FontSize.REGULAR }
const combine = { backgroundColor: Colors.MAIN1, fontSize: FontSize.REGULAR, marginTop: '50px' }

export const Navigator: FC<IProps> = (props: IProps) => {
  if (props.locate === 'home') {
    return (
      <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator'>
        <UserItem />
        <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={combine} />
        <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} />
        <MenuItem name='Báo động' url='/notify' icon={BellIcon} />
        <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} />
      </div>
    )
  } else if (props.locate === 'cameras') {
    return (
      <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator'>
        <UserItem />
        <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={first_item} />
        <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} style={onLocate} />
        <MenuItem name='Báo động' url='/notify' icon={BellIcon} />
        <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} />
      </div>
    )
  } else if (props.locate === 'notifications') {
    return (
      <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator'>
        <UserItem />
        <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={first_item} />
        <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} />
        <MenuItem name='Báo động' url='/notify' icon={BellIcon} style={onLocate} />
        <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} />
      </div>
    )
  } else {
    return (
      <div style={{ backgroundColor: Colors.MAIN2 }} className='navigator'>
        <UserItem />
        <MenuItem name='Trang chủ' url='/home' icon={HomeIcon} style={first_item} />
        <MenuItem name='Xem camera' url='/camera' icon={CameraIcon} />
        <MenuItem name='Báo động' url='/notify' icon={BellIcon} />
        <MenuItem name='Dự đoán' url='/calculator' icon={SettingIcon} style={onLocate} />
      </div>
    )
  }
}
