import { movieItem } from '@/types/movieItem';

const action = 'SET_FAVORITE'
const setFavorite = (payload: {
  data: movieItem[] | null,
  favorite: string[] | null
}) => ({
  type: action,
  payload,
});
export default setFavorite;
