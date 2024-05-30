import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { FontSize } from '../../assets/theme'
import { Navigator } from '../../components/Navigators'
import { APIListPhotosResponse, ErrorMessage, oldAPIUrl } from '../../service'
// import moment from 'moment'
import './index.scss'

const Statistic: FC = () => {
  const [data, setData] = useState<{ date: string; probability: number }[]>([])
  const [filterDate, setFilterDate] = useState<string>('')
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  // const fillMissingData = (data: APIListPhotosResponse[], interval: number, startTime: string, endTime: string) => {
  //   const result = []
  //   let currentTime = moment(startTime)
  //   const end = moment(endTime)

  //   while (currentTime <= end) {
  //     const timeString = currentTime.format('YYYY-MM-DDTHH:mm:ss')
  //     const existingData = data.find((d) => d.start_time === timeString)
  //     result.push({ start_time: timeString, probability: existingData ? existingData.probability : 0 })
  //     currentTime = currentTime.add(interval, 'minutes')
  //   }

  //   return result
  // }

  useEffect(() => {
    const apiUrl = oldAPIUrl + `/api/cameras/${id}/datas`
    const fetchCameras = async () => {
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const json = (await response.json()) as APIListPhotosResponse[]
        const filterData = json.filter((element) => {
          if (filterDate) return element.start_time.includes(filterDate)
          return true
        })
        // const filterDataNext = fillMissingData(filterData, 10, json[0].start_time, String(new Date()))
        setData(
          filterData.map((element) => {
            const start_time = new Date(element.start_time)
            const date = filterDate
              ? `${start_time.getHours() - 7}:${start_time.getMinutes()}:${start_time.getSeconds()}`
              : `${start_time.getFullYear()}-${start_time.getMonth() + 1}-${start_time.getDate()}`
            return { date: String(date), probability: element.probability }
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
              <Line type='monotone' dataKey='probability' stroke='#8884d8' />
            </LineChart>
          </ResponsiveContainer>
          <input type='date' onChange={(e) => setFilterDate(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default Statistic
