import { FC, useState } from 'react'
import { APIAnalyzeAIResponse, ErrorMessage, IFormAddDataProps } from '../../service'
import './index.scss'

export const FormAddData: FC<IFormAddDataProps> = ({ setClicks, setDataTable }) => {
  const [temp, setTemp] = useState<string>('0.0')
  const [humid, setHumid] = useState<string>('0.0')
  const [TVOC, setTVOC] = useState<string>('0.0')
  const [eCO2, seteCO2] = useState<string>('0.0')
  const [RAWH2, setRAWH2] = useState<string>('0.0')
  const [RAWEth, setRAWEth] = useState<string>('0.0')
  const [presure, setPresure] = useState<string>('0.0')
  const [PMI, setPMI] = useState<string>('0.0')

  const handleAddForm = async () => {
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
      if (response.status === 200) {
        const responseData = (await response.json()) as APIAnalyzeAIResponse
        setDataTable((prevState) => {
          const newState = [...prevState]
          const values = [temp, humid, TVOC, eCO2, RAWH2, RAWEth, presure, PMI, 1]
          const numArray = values.map((str) => {
            const num = Number(str)
            return isNaN(num) ? 0 : num
          })
          newState.push(numArray)
          return newState
        })
        console.log(responseData)
        setClicks(false)
      } else {
        const errorData = (await response.json()) as ErrorMessage
        console.log(errorData.message)
        setClicks(false)
      }
    } catch (err) {
      setDataTable((prevState) => {
        const newState = [...prevState]
        const values = [temp, humid, TVOC, eCO2, RAWH2, RAWEth, presure, PMI, 1]
        const numArray = values.map((str) => {
          const num = Number(str)
          return isNaN(num) ? 0 : num
        })
        newState.push(numArray)
        return newState
      })
      setClicks(false)
    }
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-button' onClick={() => setClicks(false)}>
          &times;
        </button>
        <form>
          <label>
            Nhập nhiệt độ:
            <input type='text' onChange={(e) => setTemp(e.target.value)} value={temp} />
          </label>
          <label>
            Nhập độ ẩm:
            <input type='text' onChange={(e) => setHumid(e.target.value)} value={humid} />
          </label>
          <label>
            Nhập TVOC:
            <input type='text' onChange={(e) => setTVOC(e.target.value)} value={TVOC} />
          </label>
          <label>
            Nhập eCO2:
            <input type='text' onChange={(e) => seteCO2(e.target.value)} value={eCO2} />
          </label>
          <label>
            Nhập RAW H2:
            <input type='text' onChange={(e) => setRAWH2(e.target.value)} value={RAWH2} />
          </label>
          <label>
            Nhập RAW Ethanol:
            <input type='text' onChange={(e) => setRAWEth(e.target.value)} value={RAWEth} />
          </label>
          <label>
            Nhập áp suất:
            <input type='text' onChange={(e) => setPresure(e.target.value)} value={presure} />
          </label>
          <label>
            Nhập PMI1.0:
            <input type='text' onChange={(e) => setPMI(e.target.value)} value={PMI} />
          </label>
          <button type='button' onClick={handleAddForm}>
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormAddData
