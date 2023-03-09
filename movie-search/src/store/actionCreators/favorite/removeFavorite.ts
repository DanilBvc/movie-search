import { movieItem } from '@/types/movieItem';
import { Actions } from '@/types/store/actions';

const removeFavorite = (payload: {
  data: movieItem[] | null,
  favorite: string[] | null
}) => ({
  type: Actions.removeFav,
  payload,
});
export default removeFavorite;
