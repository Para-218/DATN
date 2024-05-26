import { FC, useState } from 'react'
import { FontSize } from '../../assets/theme'
import { Navigator } from '../../components/Navigators'
import './index.scss'
import AddButton from '../../assets/icon/Add button.png'
import AdjustButton from '../../assets/icon/Adjust button.png'
//import FormAddData from '../../components/FormAddData'

const Calculator: FC = () => {
  const [clicked, setClicks] = useState<boolean>(false)
  const [temp, setTemp] = useState<string>('0.0')
  const [humid, setHumid] = useState<string>('0.0')
  const [TVOC, setTVOC] = useState<string>('0.0')
  const [eCO2, seteCO2] = useState<string>('0.0')
  const [RAWH2, setRAWH2] = useState<string>('0.0')
  const [RAWEth, setRAWEth] = useState<string>('0.0')
  const [presure, setPresure] = useState<string>('0.0')
  const [PMI, setPMI] = useState<string>('0.0')

  const handleAddData = () => {
    setClicks(false)
  }

  const handleAddForm = async () => {
    setClicks(true)
    const apiUrl = 'http://128.199.66.84/api/model/data'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values: [temp, humid, TVOC, eCO2, RAWH2, RAWEth, presure, PMI]
        })
      })
      if (!response.ok) {
        const errorData = await response.json()
        const customError = errorData
        console.log(customError)
      } else {
        const responseData = await response.json()
        console.log(responseData)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleAdjustData = () => {
    alert('Chức năng đang được phát triển')
  }

  const FormAddData: FC = () => {
    return (
      <div className='modal-overlay'>
        <div className='modal-content'>
          <button className='close-button' onClick={handleAddData}>
            &times;
          </button>
          <form>
            <label>
              Nhập nhiệt độ:
              <input type='text' onChange={(e) => setTemp(e.target.value)} />
            </label>
            <label>
              Nhập độ ẩm:
              <input type='text' onChange={(e) => setHumid(e.target.value)} />
            </label>
            <label>
              Nhập TVOC:
              <input type='text' onChange={(e) => setTVOC(e.target.value)} />
            </label>
            <label>
              Nhập eCO2:
              <input type='text' onChange={(e) => seteCO2(e.target.value)} />
            </label>
            <label>
              Nhập RAW H2:
              <input type='text' onChange={(e) => setRAWH2(e.target.value)} />
            </label>
            <label>
              Nhập RAW Ethanol:
              <input type='text' onChange={(e) => setRAWEth(e.target.value)} />
            </label>
            <label>
              Nhập áp suất:
              <input type='text' onChange={(e) => setPresure(e.target.value)} />
            </label>
            <label>
              Nhập PMI1.0:
              <input type='text' onChange={(e) => setPMI(e.target.value)} />
            </label>
            <button type='button' onClick={handleAddForm}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className='page'>
      <Navigator locate='calculator' />
      <div className='main-content'>
        <div className='calculator-content'>
          {clicked && <FormAddData />}
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
  )
}

export default Calculator
