//Import Actions

export default (state = null, action) => {
  switch (action.type) {
    
    case 'GET_MOVIE_DETAILS':
        return action.payload.data ||  null
        break;

    case 'CLEAR_MOVIE_DETAILS':
        return null
        break;
  }
  return state
}