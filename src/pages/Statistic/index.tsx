import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { FontSize } from '../../assets/theme'
import { Navigator } from '../../components/Navigators'
import { APIListPhotosResponse, ErrorMessage, oldAPIUrl } from '../../service'
import './index.scss'

const Statistic: FC = () => {
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = e.target.value.split('-').map((item) => parseInt(item))
    const filterDate = `${a[1]}/${a[2]}/${a[0]}`
    const b = data.filter((element) => element.date.includes(filterDate))
    console.log(b)
  }

  const [data, setData] = useState<{ date: string; probabilty: number }[]>([])
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  useEffect(() => {
    const apiUrl = oldAPIUrl + `/api/cameras/${id}/datas`
    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const json = (await response.json()) as APIListPhotosResponse[]
        setData(
          json.map((data) => {
            const start_time = new Date(data.start_time)
            const date = start_time.toISOString()
            return { date: String(date), probabilty: data.probability }
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
  }, [])

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
          <input type='date' onChange={(e) => onChangeDate(e)} />
        </div>
      </div>
    </div>
  )
}

export default Statistic
