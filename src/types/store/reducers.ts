import { initialState } from '@/store/initialState/initialState';
import { movieItem } from '@/types/movieItem';

export interface InitialMovieState {
  favorite: string[],
  movies: movieItem[]
}
export interface IReducers {
  setMovieReducer: InitialMovieState
}
