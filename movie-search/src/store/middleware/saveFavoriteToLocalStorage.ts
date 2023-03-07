import { movieItem } from '@/types/movieItem';
import { Dispatch, MiddlewareAPI } from 'redux';

export const saveFavorite = (store: MiddlewareAPI) => (next: Dispatch) => (action: {
  type: string, payload: {
    data: movieItem[] | null,
    favorite: string[] | null
  }
}) => {
  const getFavoriteFromLocalStorage = localStorage.getItem('favorite')
  if (action.payload.favorite !== null && action.type === 'SET_FAVORITE') {
    localStorage.setItem("favorite", JSON.stringify(action.payload.favorite))
  }
  if (action.payload.favorite !== null && action.type === 'REMOVE_FAVORITE' && getFavoriteFromLocalStorage) {
    const favoriteArray = JSON.parse(getFavoriteFromLocalStorage)
    const favoriteFromAction = action.payload.favorite as string[]
    const resultFavoriteArray = favoriteArray.filter((item: string) => item !== favoriteFromAction[0])
    localStorage.setItem("favorite", JSON.stringify(resultFavoriteArray))
  }
  let result = next(action)
  return result
}
