import { FC, useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { APIListPhotosResponse, ErrorMessage, ILineChartStatisticProps, oldAPIUrl } from '../../../service'
import './index.scss'

export const LineChartStatistic: FC<ILineChartStatisticProps> = ({ id }) => {
  const [data, setData] = useState<{ date: string; probabilty: number }[]>([])

  useEffect(() => {
    const apiUrl = oldAPIUrl + `/api/cameras/${id}/datas`
    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const json = (await response.json()) as APIListPhotosResponse[]
        setData(
          json
            .filter((data) => {
              const date = new Date(data.start_time)
              const today = new Date()
              return today.getTime() - date.getTime() < 24 * 60 * 60 * 1000
            })
            .map((data) => {
              const start_time = new Date(data.start_time)
              const date = `${start_time.getHours()}:${start_time.getMinutes()}:${start_time.getSeconds()}`
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
    <a href={`/statistic?id=${id}`}>
      <ResponsiveContainer width='90%' height='80%'>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='probabilty' name={`Camera ${id}`} stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </a>
  )
}
