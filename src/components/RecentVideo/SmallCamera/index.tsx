import { FC, useEffect, useState } from 'react'
import ImageNotFound from '../../../assets/images/Image_not_available.png'
import { FontSize } from '../../../assets/theme'
import { APIListPhotosResponse, ErrorMessage, ISmallVideoProps, oldAPIUrl } from '../../../service'
import './index.scss'

export const SmallVideo: FC<ISmallVideoProps> = (props: ISmallVideoProps) => {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [clickedImage, setClickedImage] = useState<boolean>(false) //eslint-disable-line

  useEffect(() => {
    const fetchLastPhoto = async () => {
      const apiUrl = oldAPIUrl + `/api/cameras/${props.id}/datas`
      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = (await response.json()) as APIListPhotosResponse[]
        return data[data.length - 1].data_link
      } else {
        const error = (await response.json()) as ErrorMessage
        console.log(error.message)
        return 'error'
      }
    }

    const fetchPhoto = async (dataLink: Promise<string>) => {
      const data_link = await dataLink
      const apiUrl = oldAPIUrl + `/api/datas/${data_link}`

      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = await response.blob()
        const url = URL.createObjectURL(data)
        setImageSrc(url)
      } else {
        const error = (await response.json()) as ErrorMessage
        console.log(error.message)
      }
    }
    try {
      const dataLink = fetchLastPhoto()
      fetchPhoto(dataLink)
    } catch (err) {
      console.log(err)
    }
    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc)
    } /* eslint-disable-next-line */
  }, [props])

  // const ModalImage = () => {
  //   return (
  //     <div className='modal-overlay' onClick={() => setClickedImage(false)}>
  //       <div className='modal-content'>
  //         <button className='close-button' onClick={() => setClickedImage(false)}>
  //           &times;
  //         </button>
  //         <img src={imageSrc || ImageNotFound} />
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <a className='small-video' href='#action1' style={props.style} onClick={() => setClickedImage(true)}>
      {/*clickedImage && <ModalImage />*/}
      <img src={imageSrc || ImageNotFound} />
      <div className='smaller-video'>
        <p style={{ fontSize: FontSize.REGULAR }}>{props.name}</p>
        <p style={{ fontSize: FontSize.TINY }}>{props.description}</p>
      </div>
    </a>
  )
}
