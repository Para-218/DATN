
export interface ErrorMessage {
  message: string;
  statusCode?: number;
}

export interface APISigninResponse {
  Username: string,
  Roles: [string],
  accessToken: any,
}

export interface APISignupResponse {
  message: string
}
