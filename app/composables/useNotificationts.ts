export const useNotifications = (notificationTime: number = 5000) => {
  const toast = useToast()

  const notifyUser = (message: string) =>
    toast.add({
      duration: notificationTime,
      description: message,
    })

  return {
    notifyUser,
  }
}
