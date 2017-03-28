//React
import React from 'react';

//Redux Containers
import MovieContent from '../containers/MovieContent'

const MovieDetails = ({ history }) => {
  return (
    <MovieContent history={history}/>
  )
}

export default MovieDetails;