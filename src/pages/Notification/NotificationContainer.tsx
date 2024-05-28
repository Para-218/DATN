import { FC, useEffect, useState } from 'react'
import ImageNotFound from '../../assets/images/Image_not_available.png'
import { FontSize } from '../../assets/theme'
import { APINotificationResponse, ErrorMessage, oldAPIUrl, TimeGap } from '../../service'
import './index.scss'

export const NotificationContainer: FC = () => {
  const [notificationsTable, setNotificationsTable] = useState<{ content: string; data_link: string }[]>([])
  const [clicked, setClick] = useState<boolean>(false)
  const [dataLink, setDataLink] = useState<string>('')

  useEffect(() => {
    const username = localStorage.getItem('username')
    const apiUrl = oldAPIUrl + `/api/users/${username}/notifications`
    const fetchNotifications = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        console.log(response.status)
        const data = (await response.json()) as APINotificationResponse[]
        console.log(data)
        setNotificationsTable(
          data
            .filter((data, index, array) => {
              if (index === array.length - 1) {
                return true
              } else {
                const date1 = new Date(array[index + 1].time)
                const date2 = new Date(array[index].time)
                const diffTime = Math.abs(date2.getTime() - date1.getTime())
                return diffTime > TimeGap ? true : false
              }
            })
            .map((data) => {
              return { content: data.content, data_link: data.data_link }
            })
        )
      } else {
        const error = (await response.json()) as ErrorMessage
        console.log(error.message)
      }
    }

    try {
      fetchNotifications()
    } catch (err) {
      console.log(err)
    }
  }, [])

  const jsxTableElement = notificationsTable.map((notifications, index) => {
    const content = notifications.content.split(' at ')[0]
    const time = notifications.content.split(' at ')[1]
    return (
      <tr
        key={index}
        onClick={() => {
          setClick(true)
          setDataLink(notifications.data_link)
        }}
      >
        <td>
          <p>{content}</p>
        </td>
        <td>
          <p>{time}</p>
        </td>
      </tr>
    )
  })

  const JSXImageElement = () => {
    const [imageSrc, setImageSrc] = useState<string>('')

    useEffect(() => {
      const apiUrl = oldAPIUrl + `/api/datas/${dataLink}`
      const fetchPhoto = async () => {
        const response = await fetch(apiUrl)
        if (response.status === 200) {
          const data = await response.blob()
          setImageSrc(URL.createObjectURL(data))
          console.log('1000')
        } else {
          const error = (await response.json()) as ErrorMessage
          setDataLink('')
          console.log(error.message)
        }
      }

      try {
        if (dataLink !== '' && clicked === true) fetchPhoto()
        return () => {
          if (imageSrc) URL.revokeObjectURL(imageSrc)
        }
      } catch (err) {
        console.log(err)
      }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <div className='modal-overlay'>
        <div className='modal-content'>
          <button className='close-button' onClick={() => setClick(false)}>
            &times;
          </button>
          <img src={dataLink !== '' && clicked === true ? imageSrc : ImageNotFound} />
        </div>
      </div>
    )
  }

  return (
    <div className=''>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Danh sách thông báo</p>
      {clicked && <JSXImageElement />}
      <table>
        <thead>
          <tr>
            <th>Nội dung</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>{jsxTableElement}</tbody>
      </table>
    </div>
  )
}
