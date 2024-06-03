import { FC, useState } from 'react'
import AddButton from '../../assets/icon/Add button.png'
import AdjustButton from '../../assets/icon/Adjust button.png'
import { FontSize } from '../../assets/theme'
import { FormAddData } from '../../components/FormAddData'
import { Header } from '../../components/Header'
import { Navigator } from '../../components/Navigators'
import './index.scss'

/*[50.45, 22.81, 14378, 574, 12719, 19040, 936.944, 0.85, 1],
[26.95, 56.85, 0, 400, 13000, 19442, 936.746, 0.38, 0]*/

const Calculator: FC = () => {
  const [clicked, setClicks] = useState<boolean>(false)
  const [dataTable, setDataTable] = useState<number[][]>([[26.95, 56.85, 0, 400, 13000, 19442, 936.746, 0.38, 0]])

  const handleAdjustData = () => {
    alert('Chức năng đang được phát triển')
  }

  const jsxTableElement = dataTable.map((data, index) => {
    const ifFired = data[8] === 1
    const resultStyle = ifFired ? { color: 'red' } : { color: 'green' }
    return (
      <tr key={index}>
        <td>{data[0]}</td>
        <td>{data[1]}</td>
        <td>{data[2]}</td>
        <td>{data[3]}</td>
        <td>{data[4]}</td>
        <td>{data[5]}</td>
        <td>{data[6]}</td>
        <td>{data[7]}</td>
        <td style={resultStyle}>{ifFired ? 'Cháy' : 'An toàn'}</td>
      </tr>
    )
  })

  return (
    <div className='web'>
      <Header />
      <div className='page'>
        <Navigator locate='calculator' />
        <div className='main-content'>
          <div className='calculator-content'>
            {clicked && <FormAddData setClicks={setClicks} setDataTable={setDataTable} />}
            <p style={{ fontSize: FontSize.MEDIUM, margin: '15px' }}>Dự đoán cháy thông qua dữ liệu từ sensor</p>
            <div className='calculator-inner'>
              <table>
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
                <tbody>{jsxTableElement}</tbody>
              </table>
              <div className='action'>
                <button onClick={() => setClicks(true)}>
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
    </div>
  )
}

export default Calculator
