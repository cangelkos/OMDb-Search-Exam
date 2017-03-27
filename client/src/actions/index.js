//Import axios for the AJAX Stuff
import axios from 'axios'

export const getOMDBMovies = (term, page = 1) => {

  let url = `http://www.omdbapi.com/?s=${term}&type=movie&page=${page}`
  let request = axios.get(url)

  return page === 1
    ? {
      type: 'GET_OMDB_MOVIES',
      payload: request
    }
    : {
      type: 'GET_MORE_OMDB_MOVIES',
      payload: request
    }
}

export const clearMovies = () => {
  return {
    type: 'CLEAR_MOVIES',
    payload: []
  }
}

const updateSearchTerm = (term) => {
  return {
    type: 'UPDATE_SEARCH_TERM',
    payload: term
  }
}

export const loadingMovies = (isLoadingMovies) => {
  return {
    type: 'LOADING_MOVIES',
    payload: isLoadingMovies
  }
}

export const moviesRequestThunk = (term) => {

  return (dispatch, getStore) => {
    
    //Set isLoadingMovies to true
    dispatch(loadingMovies(true))
    dispatch(clearMovies())
    dispatch(updateSearchTerm(term))
    //Get movies from ODBCAPI, if no term is supplied, get the next page of results.
    return dispatch(getOMDBMovies(term))
    .catch(error => {
      //ERROR THE CONNECTION.
      console.log('GET REQUEST FAILED: ', error)
      //Set isLoadingMovies back to false.
    })  
  }
}

const getMovieDetails = (id) => {
  let url = `http://www.omdbapi.com/?i=${id}`
  let request = axios.get(url)
      
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: request
  }
}

export const clearMovieDetails = () => {
  return {
    type: 'CLEAR_MOVIE_DETAILS',
    payload: null
  }
}

export const moreMoviesRequestThunk = () => {
  
  return (dispatch, getStore) => {
    if (getStore().omdbRequest.Search) {

      dispatch(loadingMovies(true))
      return dispatch(getOMDBMovies(getStore().moviesSearchTerm, getStore().moviesPage.page + 1))
      .catch(error => {
        //ERROR THE CONNECTION.
        console.log('GET REQUEST FAILED: ', error)
        //Set isLoadingMovies back to false.
      })  
    }
  }
}

export const movieDetailsRequestThunk = (id) => {
  return (dispatch, getStore) => {
    
    dispatch(loadingMovies(true))
    dispatch(getMovieDetails(id))
  }
}
