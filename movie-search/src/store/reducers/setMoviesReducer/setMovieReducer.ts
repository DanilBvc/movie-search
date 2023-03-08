import { movieItem } from './../../../types/movieItem';
import { initialState } from '@/store/initialState/initialState'

export const setMovieReducer = (state = initialState, action: {
  type: string,
  payload: {
    data: movieItem[] | null,
    favorite: string[] | null
  }
}) => {
  switch (action.type) {
    case 'SET_MOVIE': {
      if (action.payload.data !== null && action.payload.data !== undefined) {
        return {
          favorite: [...state.favorite],
          movies: [...action.payload.data]
        }
      } else if (action.payload.data === null) {
        return {
          favorite: [...state.favorite],
          movies: null
        }
      }
      return state
    }
    case 'SET_FAVORITE': {
      if (action.payload.favorite !== null) {
        return {
          favorite: [...state.favorite, ...action.payload.favorite],
          movies: [...state.movies]
        }
      }
      return state
    }
    case 'REMOVE_FAVORITE': {
      if (action.payload.favorite !== null) {
        const favoriteFromAction = action.payload.favorite as string[]
        return {
          favorite: [...state.favorite.filter((item) => item !== favoriteFromAction[0])],
          movies: [...state.movies]
        }
      }
      return state
    }
    default: return state;
  }
}
