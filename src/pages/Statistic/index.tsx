import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { FontSize } from '../../assets/theme'
import { Navigator } from '../../components/Navigators'
import { APIListPhotosResponse, ErrorMessage, oldAPIUrl } from '../../service'
import './index.scss'

const Statistic: FC = () => {
  const [data, setData] = useState<{ date: string; probabilty: number }[]>([])
  const [filterDate, setFilterDate] = useState<string>('')
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  useEffect(() => {
    const apiUrl = oldAPIUrl + `/api/cameras/${id}/datas`
    console.log(200)
    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const json = (await response.json()) as APIListPhotosResponse[]
        console.log(filterDate)
        setData(
          json
            .filter((element) => {
              console.log(element.start_time)
              if (filterDate) return element.start_time.includes(filterDate)
              return true
            })
            .map((element) => {
              const start_time = new Date(element.start_time)
              const date = filterDate
                ? `${start_time.getHours() - 7}:${start_time.getMinutes()}:${start_time.getSeconds()}`
                : `${start_time.getFullYear()}-${start_time.getMonth() + 1}-${start_time.getDate()}`
              return { date: String(date), probabilty: element.probability }
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
    } /* eslint-disable-next-line */
  }, [filterDate])

  return (
    <div className='page'>
      <Navigator locate='home' />
      <div className='main-content'>
        <div className='camera-content'>
          <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Thống kê xác suất</p>
          <ResponsiveContainer width='90%' height='80%'>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='probabilty' stroke='#8884d8' />
            </LineChart>
          </ResponsiveContainer>
          <input type='date' onChange={(e) => setFilterDate(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default Statistic
