import { FC, useState } from 'react'
import { FontSize } from '../../assets/theme'
import { Navigator } from '../../components/Navigators'
import './index.scss'
import AddButton from '../../assets/icon/Add button.png'
import AdjustButton from '../../assets/icon/Adjust button.png'
import FormAddData from '../../components/FormAddData'

const Calculator: FC = () => {
  const [clicked, setClicks] = useState<boolean>(false)

  const handleAddData = () => {
    alert('Cannot add data')
    setClicks(false)
  }

  const handleAddForm = () => {
    setClicks(true)
  }

  const handleAdjustData = () => {
    alert('Chức năng đang được phát triển')
  }

  return (
    <div className='page'>
      <Navigator locate='home' />
      <div className='main-content'>
        <div className='calculator-content'>
          {clicked && <FormAddData handleAddData={handleAddData}></FormAddData>}
          <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Dự đoán cháy thông qua dữ liệu từ sensor</p>
          <div className='calculator-inner'>
            <table className=''>
              <thead>
                <tr>
                  <th>NHIỆT ĐỘ (C)</th>
                  <th>ĐỘ ẨM (%)</th>
                  <th>TVOC (ppb)</th>
                  <th>eCO2 (ppm)</th>
                  <th>RAW H2</th>
                  <th>RAW Ethanol</th>
                  <th>ÁP SUẤT (hPa)</th>
                  <th>PM1.0</th>
                  <th>KẾT QUẢ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>50.45</td>
                  <td>22.81</td>
                  <td>14378</td>
                  <td>574</td>
                  <td>12719</td>
                  <td>19040</td>
                  <td>936.944</td>
                  <td>0.85</td>
                  <td style={{ color: 'red' }}>Cháy</td>
                </tr>
                <tr>
                  <td>26.95</td>
                  <td>56.85</td>
                  <td>0</td>
                  <td>400</td>
                  <td>13000</td>
                  <td>19442</td>
                  <td>936.746</td>
                  <td>0.38</td>
                  <td style={{ color: 'green' }}>An toàn</td>
                </tr>
              </tbody>
            </table>
            <div className='action'>
              <button onClick={handleAddForm}>
                <img src={AddButton} />
                <p style={{ fontSize: FontSize.REGULAR }}>Thêm</p>
              </button>
              <button onClick={handleAdjustData}>
                <img src={AdjustButton} />
                <p style={{ fontSize: FontSize.REGULAR }}>Chỉnh sửa</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
