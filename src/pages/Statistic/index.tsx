import React, { FC, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { FontSize } from '../../assets/theme'
import { Navigator } from '../../components/Navigators'
import './index.scss'

interface APIData {
  date: string
  time: string
  camera1: number
  camera2: number
  camera3: number
}

const data: APIData[] = [
  {
    date: '4/19/2024',
    time: '19:24',
    camera1: 40.0,
    camera2: 24.0,
    camera3: 24.0
  },
  {
    date: '4/20/2024',
    time: '19:24',
    camera1: 30.0,
    camera2: 13.98,
    camera3: 22.1
  },
  {
    date: '4/21/2024',
    time: '19:24',
    camera1: 20.0,
    camera2: 98.0,
    camera3: 22.9
  },
  {
    date: '4/22/2024',
    time: '19:24',
    camera1: 27.8,
    camera2: 39.08,
    camera3: 20.0
  },
  {
    date: '4/23/2024',
    time: '19:24',
    camera1: 18.9,
    camera2: 48.0,
    camera3: 21.81
  },
  {
    date: '4/24/2024',
    time: '19:24',
    camera1: 23.9,
    camera2: 38.0,
    camera3: 25.0
  },
  {
    date: '4/25/2024',
    time: '19:24',
    camera1: 34.9,
    camera2: 43.0,
    camera3: 21.0
  }
]

//const today = new Date()
//const todayToString = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`

const Statistic: FC = () => {
  const [filterData, setFilterData] = useState<APIData[] | []>(data)
  const [xaxis, setXaxis] = useState('date')

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = e.target.value.split('-').map((item) => parseInt(item))
    const filterDate = `${a[1]}/${a[2]}/${a[0]}`
    const b = data.filter((element) => element.date.includes(filterDate))
    setFilterData(b)
    setXaxis('time')
  }

  return (
    <div className='page'>
      <Navigator locate='home' />
      <div className='main-content'>
        <div className='camera-content'>
          <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Thống kê xác suất</p>
          <ResponsiveContainer width='90%' height='80%'>
            <LineChart data={filterData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey={xaxis} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='camera2' stroke='#8884d8' />
              <Line type='monotone' dataKey='camera1' stroke='#82ca9d' />
              <Line type='monotone' dataKey='camera3' stroke='#870a0d' />
            </LineChart>
          </ResponsiveContainer>
          <input type='date' onChange={(e) => onChangeDate(e)} />
        </div>
      </div>
    </div>
  )
}

export default Statistic
