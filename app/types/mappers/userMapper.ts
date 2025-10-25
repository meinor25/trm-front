import type { ApiLoginResponseUser } from '../api/auth'
import type { User } from '../domain/user'

export const mapApiUserToDomain = (user: ApiLoginResponseUser): User => {
  return {
    name: user.name,
    username: user.username,
    email: user.email,
    main_instrument: user.instruments,
    role: user.role,
    profile_photo: user.profile_photo,
  }
}
