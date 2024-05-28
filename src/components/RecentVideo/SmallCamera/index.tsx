/* eslint-disable */
import { FC, useEffect, useState } from 'react'
import { FontSize } from '../../../assets/theme'
import { APIListPhotosResponse, ErrorMessage, ISmallVideoProps } from '../../../service'
import ImageNotFound from '../../../assets/images/Image_not_available.png'
import './index.scss'
/* eslint-enable */
export const SmallVideo: FC<ISmallVideoProps> = (props: ISmallVideoProps) => {
  const [imageSrc, setImageSrc] = useState<string>('')

  useEffect(() => {
    const fetchLastPhoto = async () => {
      // const apiUrl = `https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/cameras/${props.id}/datas`
      // const response = await fetch(apiUrl)
      // if (response.status === 200) {
      //   const data = (await response.json()) as APIListPhotosResponse[]
      //   return data[data.length - 1].data_link
      // } else {
      //   const error = (await response.json()) as ErrorMessage
      //   console.log(error.message)
      //   return ''
      // }
      return '1_2024052818200.png'
    }

    const fetchPhoto = async (dataLink: Promise<string>) => {
      const data_link = await dataLink
      const apiUrl = `https://ndvinh2110-specialized-project-559f6681f92a.herokuapp.com/api/datas/${data_link}`

      const response = await fetch(apiUrl)
      if (response.status === 200) {
        const data = await response.blob()
        const url = URL.createObjectURL(data)
        setImageSrc(url)
        console.log(url)
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
  }, [])

  return (
    <a className='small-video' href={imageSrc} style={props.style}>
      <img src={imageSrc || ImageNotFound} />
      <div className='smaller-video'>
        <p style={{ fontSize: FontSize.REGULAR }}>{props.name}</p>
        <p style={{ fontSize: FontSize.TINY }}>{props.description}</p>
      </div>
    </a>
  )
}
