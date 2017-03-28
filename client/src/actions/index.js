//Import axios for the AJAX Stuff
import axios from 'axios'

export const getOMDBMovies = (term, page = 1) => {
  //Get data from api
  let url = `http://www.omdbapi.com/?s=${term}&type=movie&page=${page}`
  let request = axios.get(url)
  
  //If its the first page, dispatch GET_OMDB_MOVIES action, else dispatch GET_MORE_OMDB_MOVIES
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
  //Removes movies from the movies array, before getting new data from the API
  return {
    type: 'CLEAR_MOVIES',
    payload: []
  }
}

const updateSearchTerm = (term) => {
  //Updates the searchTerm
  return {
    type: 'UPDATE_SEARCH_TERM',
    payload: term
  }
}

export const loadingMovies = (isLoadingMovies) => {
  //Sets the isLoadingMovies to true or false, to control rendering of spinners.
  return {
    type: 'LOADING_MOVIES',
    payload: isLoadingMovies
  }
}

export const moviesRequestThunk = (term) => {

  return (dispatch, getStore) => {
    
    //Set isLoadingMovies to true
    dispatch(loadingMovies(true))
    //Clear the movies array
    dispatch(clearMovies())

    //Update the Search Term in Redux
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
  
  //Get movie details data from api
  let url = `http://www.omdbapi.com/?i=${id}`
  let request = axios.get(url)
      
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: request
  }
}

export const clearMovieDetails = () => {
  //Clears the movie details when closing the window.
  return {
    type: 'CLEAR_MOVIE_DETAILS',
    payload: null
  }
}

export const moreMoviesRequestThunk = () => {
  //Get more movies from the API
  return (dispatch, getStore) => {
    //Check if the last omdbRequest returned movies.
    if (getStore().omdbRequest.Search) {
      
      //Set the isLoading state, to trigger the spinner.
      dispatch(loadingMovies(true))

      //Get the next page of results.
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
    //Set the isLoading state, to trigger the spinner.
    dispatch(loadingMovies(true))
    //Get the movie details.
    dispatch(getMovieDetails(id))
  }
}
