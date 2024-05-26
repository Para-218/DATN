
export interface ErrorMessage {
  message: string;
  statusCode?: number;
}

export interface APISigninResponse {
  username: string,
  roles: [string],
  accessToken: string,
}

export interface APIEditProfileResponse {
  message: string
}

export type Storage = 'username' | 'roles' | 'accessToken'

export interface APISignupResponse {
  message: string
}
