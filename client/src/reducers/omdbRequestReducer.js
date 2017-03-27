export default (state = null, action) => {
  
  switch (action.type) {

    case 'GET_OMDB_MOVIES':
      return action.payload.data || {}
      break;
    
    case 'RESET_STATE':
      return null
      break;
  }
  return state
}