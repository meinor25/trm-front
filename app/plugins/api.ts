export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const refreshToken = useCookie('refresh_token')
  const { setAccessToken, setUser } = useAuth()

  const api = $fetch.create({
    baseURL: config.public.apiUrl,
    onRequest: ({ request, options }) => {
      console.log(options)
    },
  })

  // if(refreshToken)

  return {
    provide: {
      api,
    },
  }
})
