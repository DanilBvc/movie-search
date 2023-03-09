import { Actions } from '@/types/store/actions';
import { movieItem } from './../../../types/movieItem';
const setMovies = (payload: {
  data: movieItem[] | null,
  favorite?: string[] | null
}) => ({
  type: Actions.setMovies,
  payload,
});
export default setMovies;
