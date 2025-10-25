import type {
  ApiLoginResponseUser,
  ApiLoginSuccessResponse,
} from '~/types/api/auth'
import type { User } from '~/types/domain/user'
import { mapApiUserToDomain } from '~/types/mappers/userMapper'

export const useAuth = () => {
  const { $api } = useNuxtApp()
  const { notifyUser } = useNotifications()
  const access_token = useState<string | null>('access_token', () => {
    return null
  })

  const user = useState<User | null>('user', () => {
    return null
  })

  const setAccessToken = (token: string) => {
    access_token.value = token
  }

  const setUser = (userToSet: User) => {
    user.value = userToSet
  }

  const register = async (user: User) => {
    const userRegistrationRequestBody = {
      ...user,
      instruments: user.main_instrument,
    }

    return await $api('/auth/register', {
      method: 'post',
      body: userRegistrationRequestBody,
    })
  }

  const login = async (
    username: string,
    password: string,
    remember: boolean = false
  ) => {
    try {
      const response = await $api<ApiLoginSuccessResponse>('/auth/login', {
        method: 'post',
        credentials: 'include',
        body: {
          username,
          password,
          remember_me: remember,
        },
      })
      if (response) {
        access_token.value = response.token
        user.value = mapApiUserToDomain(response.user)
        navigateTo('/')
      }
    } catch (error) {
      const err = error as any
      if ('statusCode' in err) {
        if (err.statusCode === 401) {
          notifyUser('Credenciales invalidas')
        }
      }
    }
  }

  const logout = async () => {
    await $api('/auth/logout', {
      method: 'post',
      credentials: 'include',
    })
    access_token.value = null
    user.value = null
    navigateTo('/auth/login')
  }

  return {
    register,
    login,
    access_token,
    user,
    setAccessToken,
    setUser,
    logout,
  }
}
