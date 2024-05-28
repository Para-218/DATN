export interface ErrorMessage {
  message: string
  statusCode?: number
}

export interface APISigninResponse {
  username: string
  roles: [string]
  accessToken: string
}

export interface APISigninError {
  message: string
  accessToken: string | null
}

export interface APISignupResponse {
  message: string
}

export interface APISignupError {
  message: string
}

export interface APIEditProfileResponse {
  message: string
}

export interface APIAnalyzeAIResponse {
  values: [number]
}

export interface APINotificationResponse {
  id: number
  data_link: string
  username: string
  time: string
  content: string
}

export interface APIListCameraResponse {
  id: number
  name: string
  location: string
  ip_address: string
  users_cameras: {
    camera_sensor_id: number
    username: string
  }
}

export interface APIListPhotosResponse {
  data_link: string
  data_type: string
  camera_sensor_id: number
  start_time: string
  end_time: string | null
  ai_output: boolean
  probability: number
}

export type Storage = 'username' | 'roles' | 'token' | 'recentVideo'

export interface INavigateProps {
  locate: 'home' | 'cameras' | 'notifications' | 'calculator'
}

export interface IMenuItemProps {
  name: string
  url: string
  icon: string
  style?: React.CSSProperties
}

export interface IFormAddDataProps {
  setClicks: React.Dispatch<React.SetStateAction<boolean>>
  setDataTable: React.Dispatch<React.SetStateAction<number[][]>>
}

export interface ISmallVideoProps {
  name: string
  dataLink: string
  description: string
  style?: React.CSSProperties
}

export interface IStatisticProps {
  listCameras: { id: number; name: string; location: string; ip_address: string }[]
}

export interface ICameraProps {
  listCameras: { id: number; name: string; location: string; ip_address: string }[]
}
