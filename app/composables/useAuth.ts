import type { User } from '~/types/domain/user'

export const useAuth = () => {
  const { $api } = useNuxtApp()
  const { notifyUser } = useNotifications()

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

  const login = async (email: string, password: string) => {
    notifyUser('Ofi chata')

    return await $api('/auth/login', {
      method: 'post',
      body: {
        email,
        password,
      },
    })
  }

  return {
    register,
    login,
  }
}
