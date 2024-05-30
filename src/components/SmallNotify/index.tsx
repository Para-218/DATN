import { FC, useEffect, useState } from 'react'
import { FontSize } from '../../assets/theme'
import { APINotificationResponse, ErrorMessage, oldAPIUrl, TimeGap } from '../../service'
import './index.scss'

export const SmallNotify: FC = () => {
  const [notificationsTable, setNotificationsTable] = useState<{ content: string; time: string }[]>([])

  useEffect(() => {
    const username = localStorage.getItem('username')
    const apiUrl = oldAPIUrl + `/api/users/${username}/notifications`

    const fetchNotifications = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = (await response.json()) as APINotificationResponse[]
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
              return { content: data.content, time: data.time }
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
    const fulldate = new Date(notifications.time)
    const today = new Date()
    const content = notifications.content.split(' at ')[0]
    const time =
      fulldate.getDay() !== today.getDay()
        ? notifications.content.split(' at ')[1].split(' ')[0]
        : notifications.content.split(' at ')[1].split(' ')[1]
    return (
      <tr key={index}>
        <td>{content}</td>
        <td>
          <p>{time}</p>
        </td>
      </tr>
    )
  })

  return (
    <div className='small-notify'>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Thông báo</p>
      <div className='small-notify-inner'>
        <table onClick={() => (window.location.href = '/notify')}>
          <thead></thead>
          <tbody>{jsxElement}</tbody>
        </table>
      </div>
    </div>
  )
}
