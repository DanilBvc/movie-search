import { Actions } from './../../../types/store/actions';
import { movieItem } from '@/types/movieItem';

const setFavorite = (payload: {
  data: movieItem[] | null,
  favorite: string[] | null
}) => ({
  type: Actions.setFav,
  payload,
});
export default setFavorite;
