import { applyMiddleware, combineReducers, createStore } from 'redux';
import { setMovieReducer } from './reducers/setMoviesReducer/setMovieReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { saveFavorite } from './middleware/saveFavoriteToLocalStorage';
const rootReducer = combineReducers({
  setMovieReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saveFavorite)))
