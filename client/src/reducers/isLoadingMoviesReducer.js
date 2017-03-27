export default (state = false, action) => {
  
  switch (action.type) {
    
    case 'GET_OMDB_MOVIES':
      
      return false
      break;

    case 'GET_MORE_OMDB_MOVIES':
      
      return false
      break;

    case 'GET_MOVIE_DETAILS':
      
      return false
      break;
        
    case 'LOADING_MOVIES':
     
      return true
      break;
  }

  return state
}

