import { FC, useState, useEffect } from 'react'
import { FontSize } from '../../assets/theme'
import { APIListCameraResponse, ErrorMessage } from '../../service'
import './index.scss'

export const CameraContent: FC = () => {
  const [listCameras, setListCameras] = useState<{ id: number; name: string; location: string; ip_address: string }[]>(
    []
  )

  useEffect(() => {
    const username = localStorage.getItem('username')
    const apiUrl = `https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/users/${username}/cameras`

    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = (await response.json()) as APIListCameraResponse[]
        setListCameras(
          data.map((data) => {
            return { id: data.id, name: data.name, location: data.location, ip_address: data.ip_address }
          })
        )
      } else {
        const error = (await response.json()) as ErrorMessage
        console.log(error.message)
      }
    }
    try {
      fetchCameras()
    } catch (err) {
      console.log(err)
    }
  }, [])

  const HTML_TRs_Element = listCameras.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.id}</td>
        <td>
          <a href='.'>
            <div>{element.name}</div>
          </a>
        </td>
        <td>{element.location}</td>
      </tr>
    )
  })

  return (
    <div className=''>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Danh sách camera</p>
      <table style={{ fontSize: FontSize.REGULAR }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Địa điểm</th>
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
