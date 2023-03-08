import { movieItem } from '@/types/movieItem';

const action = 'REMOVE_FAVORITE'
const removeFavorite = (payload: {
  data: movieItem[] | null,
  favorite: string[] | null
}) => ({
  type: action,
  payload,
});
export default removeFavorite;
