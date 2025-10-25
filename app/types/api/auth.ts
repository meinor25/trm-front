import type { AllowedInstruments } from '../domain/instrument'
import type { AllowedRoles, User } from '../domain/user'

export interface ApiLoginSuccessResponse {
  token: string
  user: ApiLoginResponseUser
}

export interface ApiLoginResponseUser {
  id: number
  username: string
  email: string
  instruments: AllowedInstruments
  profile_photo: string
  role: AllowedRoles
  name: string
}
