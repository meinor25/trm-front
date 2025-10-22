import type { AllowedInstruments } from '~/types/domain/instrument'

export interface User {
  name: string
  username: string
  email: string
  main_instrument: AllowedInstruments
  role: AllowedRoles
  profile_photo: string
}

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
} as const

export type AllowedRoles = (typeof USER_ROLES)[keyof typeof USER_ROLES]
