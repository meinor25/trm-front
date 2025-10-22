export const useAuthStore = () => {
  const authState = useState('auth', () => {
    return {
      accessToken: null,
    }
  })
}
