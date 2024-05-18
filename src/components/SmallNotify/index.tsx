import { FC } from 'react'
import { FontSize } from '../../assets/theme'
import './index.scss'

export const SmallNotify: FC = () => {
  return (
    <div className='small-notify'>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Thông báo</p>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Cảnh báo ở camera 1</td>
            <td>
              <p>15:11</p>
            </td>
          </tr>
          <tr>
            <td>Cảnh báo ở camera 1</td>
            <td>
              <p>15:11</p>
            </td>
          </tr>
          <tr>
            <td>Cảnh báo ở camera 1</td>
            <td>
              <p>15:11</p>
            </td>
          </tr>
          <tr>
            <td>Cảnh báo ở camera 1</td>
            <td>
              <p>15:11</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
