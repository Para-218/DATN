
export interface ErrorMessage {
  message: string;
  statusCode?: number;
}

export interface APISigninResponse {
  username: string,
  roles: [string],
  accessToken: string,
}

export interface APISigninError {
  message: string,
  accessToken: string | null,
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

export type Storage = 'username' | 'roles' | 'accessToken'

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));