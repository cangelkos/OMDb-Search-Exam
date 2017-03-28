export default (state = null, action) => {
  
  switch (action.type) {

    case 'CLEAR_MOVIES':     
      //Returns the array of movies, or an empty array if no movies are found.
      return []
      break;

    case 'GET_OMDB_MOVIES':     
      //Returns the array of movies, or an empty array if no movies are found.
      return action.payload.data.Search || []
      break;

    case 'GET_MORE_OMDB_MOVIES':     
      //Returns the array of movies, or an empty array if no movies are found.
      console.log('MORE MOVIES:',action.payload.data)
      let result = action.payload.data.Search
      return result 
        ? state.concat(result) 
        : state
      break;
    
  }
  return state
}