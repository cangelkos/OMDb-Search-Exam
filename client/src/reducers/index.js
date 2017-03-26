//Redux-Stuff
import { combineReducers } from 'redux'

//Reducers
import moviesReducer from './moviesReducer'
import currentMovieReducer from './currentMovieReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  currentMovie: currentMovieReducer,
})

export default rootReducer;