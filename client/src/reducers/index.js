//Redux-Stuff
import { combineReducers } from 'redux'

//Reducers
import omdbRequestReducer from './omdbRequestReducer'
import movieDetailsReducer from './movieDetailsReducer'
import moviesPageReducer from './moviesPageReducer'
import moviesSearchTermReducer from './moviesSearchTermReducer'
import isLoadingMoviesReducer from './isLoadingMoviesReducer'
import moviesReducer from './moviesReducer'

const rootReducer = combineReducers({
  omdbRequest: omdbRequestReducer,
  moviesPage: moviesPageReducer,
  moviesSearchTerm: moviesSearchTermReducer,
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  isLoadingMovies: isLoadingMoviesReducer

})

export default rootReducer;