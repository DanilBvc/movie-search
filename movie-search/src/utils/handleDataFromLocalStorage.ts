export const getFavoriteFromLocalStorage = (): null | string[] => {
  const getFavoriteFromLocalStorage = localStorage.getItem('favorite')
  if (getFavoriteFromLocalStorage !== null) {
    return JSON.parse(getFavoriteFromLocalStorage)
  }
  return null
}
