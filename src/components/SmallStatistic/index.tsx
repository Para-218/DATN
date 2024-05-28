import { FC } from 'react'
import { FontSize } from '../../assets/theme'
import { IStatisticProps } from '../../service'
import './index.scss'
import { LineChartStatistic } from './Item'

export const SmallStatistic: FC<IStatisticProps> = ({ listCameras }) => {
  const JSXListLineChart = listCameras.map((element, index) => {
    return <LineChartStatistic key={index} id={element.id} />
  })

  return (
    <div className='small-statistic'>
      <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Thống kê xác suất cháy</p>
      <a href='/statistic'>{JSXListLineChart}</a>
    </div>
  )
}
