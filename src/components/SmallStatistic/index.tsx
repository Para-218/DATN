import { FC } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { FontSize } from '../../assets/theme'
import './index.scss'

const data = [
  {
    date: '01/1',
    camera1: 40.0,
    camera2: 24.0,
    camera3: 24.0
  },
  {
    date: '02/1',
    camera1: 30.0,
    camera2: 13.98,
    camera3: 22.1
  },
  {
    date: '03/1',
    camera1: 20.0,
    camera2: 98.0,
    camera3: 22.9
  },
  {
    date: '04/1',
    camera1: 27.8,
    camera2: 39.08,
    camera3: 20.0
  },
  {
    date: '05/1',
    camera1: 18.9,
    camera2: 48.0,
    camera3: 21.81
  },
  {
    date: '06/1',
    camera1: 23.9,
    camera2: 38.0,
    camera3: 25.0
  },
  {
    date: '07/1',
    camera1: 34.9,
    camera2: 43.0,
    camera3: 21.0
  }
]

export const SmallStatistic: FC = () => {
  return (
    <div className='small-statistic'>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Thống kê xác suất cháy</p>
      <a href='/statistic'>
        <ResponsiveContainer width='90%' height='80%'>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='camera2' stroke='#8884d8' />
            <Line type='monotone' dataKey='camera1' stroke='#82ca9d' />
            <Line type='monotone' dataKey='camera3' stroke='#870a0d' />
          </LineChart>
        </ResponsiveContainer>
      </a>
    </div>
  )
}
