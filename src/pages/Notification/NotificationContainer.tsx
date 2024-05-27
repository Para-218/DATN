import { FC, useEffect, useState } from 'react'
import { FontSize } from '../../assets/theme'
import { APINotificationResponse, ErrorMessage } from '../../service'
import './index.scss'

export const NotificationContainer: FC = () => {
  const [notificationsTable, setNotificationsTable] = useState<({ content: string; data_link: string } | null)[]>([])

  useEffect(() => {
    const username = localStorage.getItem('username')
    const apiUrl = `https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/users/${username}/notifications`
    const fetchNotifications = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = (await response.json()) as APINotificationResponse[]
        console.log(100)
        setNotificationsTable(
          data
            .filter((data, index, array) => {
              if (index === 0) {
                return true
              } else {
                const date1 = new Date(array[index - 1].time)
                const date2 = new Date(array[index].time)
                const diffTime = Math.abs(date2.getTime() - date1.getTime())
                return diffTime > 600000 ? true : false
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

  const jsxElement = notificationsTable.map((notifications, index) => {
    const content = notifications?.content.split(' at ')[0]
    const time = notifications?.content.split(' at ')[1]
    return (
      <tr key={index}>
        <td>
          <p>{content}</p>
        </td>
        <td>
          <p>{time}</p>
        </td>
      </tr>
    )
  })

  return (
    <div className=''>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Danh sách thông báo</p>
      <table>
        <thead>
          <tr>
            <th>Nội dung</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>{jsxElement}</tbody>
      </table>
    </div>
  )
}
