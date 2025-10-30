export default defineNuxtRouteMiddleware((to) => {
  const { user } = useAuth()
  if (!user.value && to.path.includes('dashboard')) {
    return navigateTo('/auth/login')
  }
})
