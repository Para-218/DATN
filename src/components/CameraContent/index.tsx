import { FC } from 'react'
import { FontSize } from '../../assets/theme'
import './index.scss'

const data = [
  {
    name: 'Camera 1',
    url: '.',
    lastUpdate: new Date(2023, 1, 1, 0, 0),
    lastWarning: new Date(2023, 1, 1, 0, 0),
    percentage: 100
  },
  {
    name: 'Camera 2',
    url: '.',
    lastUpdate: new Date(2023, 1, 1, 0, 0),
    lastWarning: new Date(2023, 1, 1, 0, 0),
    percentage: 100
  },
  {
    name: 'Camera 3',
    url: '.',
    lastUpdate: new Date(2023, 1, 1, 0, 0),
    lastWarning: new Date(2024, 4, 19, 17, 24),
    percentage: 100
  }
]

const HTML_TRs_Element = data.map((element, index) => {
  let lastUpdate = `${element.lastUpdate.getMonth()}/${element.lastUpdate.getDate()}/${element.lastUpdate.getFullYear()}`
  let lastWarning = `${element.lastWarning.getMonth()}/${element.lastWarning.getDate()}/${element.lastWarning.getFullYear()}`
  const today = new Date().toLocaleDateString()

  if (today == lastWarning) lastWarning = `${element.lastWarning.getHours()}:${element.lastWarning.getMinutes()}`
  if (today == lastUpdate) lastUpdate = `${element.lastWarning.getHours()}:${element.lastWarning.getMinutes()}`

  return (
    <tr key={index}>
      <td>
        <a href={element.url}>
          <div>{element.name}</div>
        </a>
      </td>
      <td>{lastUpdate}</td>
      <td>{lastWarning}</td>
      <td>{element.percentage}</td>
    </tr>
  )
})

export const CameraContent: FC = () => {
  return (
    <div className=''>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Danh sách camera</p>
      <table style={{ fontSize: FontSize.REGULAR }}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Cảnh báo lần cuối</th>
            <th>Cập nhật lần cuối</th>
            <th>Tỉ lệ cháy</th>
          </tr>
        </thead>
        <tbody>{HTML_TRs_Element}</tbody>
      </table>
      <form>
        <input type='text' placeholder='Nhập địa chỉ ip camera' />
        <button>Thêm</button>
      </form>
    </div>
  )
}
