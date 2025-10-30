import type { ApiLoginSuccessResponse } from '~/types/api/auth'
import { mapApiUserToDomain } from '~/types/mappers/userMapper'

export default defineNuxtPlugin(async (nuxtApp) => {
  const refreshToken = useCookie('refresh_token')
  const {
    public: { apiUrl },
  } = useRuntimeConfig()
  const { user, access_token, setAccessToken, setUser } = useAuth()
  if (refreshToken.value && !access_token.value && !user.value) {
    console.log({
      refreshToken: refreshToken.value,
    })
    try {
      const response = await $fetch<ApiLoginSuccessResponse>(
        `${apiUrl}/auth/refresh`,
        {
          headers: {
            Cookie: `refresh_token=${refreshToken.value}`,
          },
          method: 'post',
        }
      )
      if (response.token && response.user) {
        setAccessToken(response.token)
        setUser(mapApiUserToDomain(response.user))
      }
    } catch (error) {
      console.log(error)
    }
  }
})
