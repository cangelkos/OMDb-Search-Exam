//Import axios for the AJAX Stuff
import axios from 'axios'

export const searchMovies = (term) => {
  
  let url = `http://www.omdbapi.com/?s=${term}&type=movie`
  let request = axios.get(url)

  return {
    type: 'GET_MOVIES',
    payload: request
  }

}

export const resetState = () => {
  return {
    type: 'RESET_STATE',
    payload: null
  }
}

export const loadMovies = () => {
  console.log('loadmovies action fired')
  return {
    type: 'LOAD_MOVIES',
    payload: null
  }
}

export const moviesRequest = (term) => {

  return dispatch => {
    dispatch(loadMovies())
    dispatch(searchMovies(term)).then(action => {
      console.log(action.payload.data.Response)
    });
    return Promise.resolve()
  }

}