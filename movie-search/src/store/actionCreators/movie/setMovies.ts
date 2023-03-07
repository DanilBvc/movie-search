import { movieItem } from './../../../types/movieItem';
const action = 'SET_MOVIE'
const setMovies = (payload: {
  data: movieItem[] | null,
  favorite?: string[] | null
}) => ({
  type: action,
  payload,
});
export default setMovies;
