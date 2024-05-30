import { FC, useState, useEffect } from 'react'
import { FontSize } from '../../assets/theme'
import { APIListCameraResponse, ErrorMessage, oldAPIUrl } from '../../service'
import './index.scss'

export const CameraContent: FC = () => {
  const [listCameras, setListCameras] = useState<{ id: number; name: string; location: string; ip_address: string }[]>(
    []
  )

  useEffect(() => {
    const username = localStorage.getItem('username')
    const apiUrl = oldAPIUrl + `/api/users/${username}/cameras`

    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = (await response.json()) as APIListCameraResponse[]
        setListCameras(
          data.map((data) => {
            return { id: data.id, name: data.name, location: data.location, ip_address: data.ip_address }
          })
        )
        return data
      } else {
        const error = (await response.json()) as ErrorMessage
        console.log(error.message)
        return []
      }
    }
    // const fetchPhotos = async (listPhoto: Promise<APIListCameraResponse[]>) => {
    //   const data_link = await listPhoto
    //   const apiUrl = oldAPIUrl + `/api/datas/${data_link}`

    //   const response = await fetch(apiUrl)
    //   if (response.status === 200) {
    //     const data = await response.blob()
    //     const url = URL.createObjectURL(data)
    //     console.log(url)
    //   } else {
    //     const error = (await response.json()) as ErrorMessage
    //     console.log(error.message)
    //   }
    // }
    try {
      // const listPhoto = fetchCameras()
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
    </div>
  )
}
