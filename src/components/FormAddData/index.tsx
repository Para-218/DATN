import { FC } from 'react'
import './index.scss'

const FormAddData: FC<{ handleAddData: () => void }> = (props) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-button' onClick={props.handleAddData}>
          &times;
        </button>
        <form>
          <label>
            Nhập nhiệt độ:
            <input type='text' />
          </label>
          <label>
            Nhập độ ẩm:
            <input type='text' />
          </label>
          <label>
            Nhập TVOC:
            <input type='text' />
          </label>
          <label>
            Nhập eCO2:
            <input type='text' />
          </label>
          <label>
            Nhập RAW H2:
            <input type='text' />
          </label>
          <label>
            Nhập RAW Ethanol:
            <input type='text' />
          </label>
          <label>
            Nhập áp suất:
            <input type='text' />
          </label>
          <label>
            Nhập PMI1.0:
            <input type='text' />
          </label>
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default FormAddData
