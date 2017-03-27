export default (state = null, action) => {
  
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return action.payload
      break;
      
    case 'RESET_STATE':
      return null
      break;
  }
  return state
}