import { FC, useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { APIListPhotosResponse, ErrorMessage, ILineChartStatisticProps } from '../../../service'
import './index.scss'

export const LineChartStatistic: FC<ILineChartStatisticProps> = ({ id }) => {
  const [data, setData] = useState<{ date: string; cameraId: string }[]>([])

  useEffect(() => {
    const apiUrl = `https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/cameras/${id}/datas`
    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const json = (await response.json()) as APIListPhotosResponse[]
        setData(
          json.map((data) => {
            return { date: data.start_time, cameraId: 'Camera ' + String(data.camera_sensor_id) }
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
    <ResponsiveContainer width='90%' height='80%'>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey={'Camera ' + String(id)} stroke='#82ca9d' />
      </LineChart>
    </ResponsiveContainer>
  )
}
