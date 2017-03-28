export default (state = null, action) => {
  
  switch (action.type) {

    case 'GET_OMDB_MOVIES':
      return action.payload.data.Search 
      ? {
          page: 1, 
          total: action.payload.data.totalResults
        } 
      : null
      break;

    case 'GET_MORE_OMDB_MOVIES':
      return action.payload.data.Search 
        ? {
          page: state.page + 1, 
          total: action.payload.data.totalResults
        } 
        : state
      break;
      
    case 'RESET_STATE':
      return 0
      break;
  }
  return state
}

