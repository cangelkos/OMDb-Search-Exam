//Import Actions

export default (state = null, action) => {
  
  switch (action.type) {

    case 'GET_MOVIES':
      return action.payload.data || {}
      break;
    
    case 'LOAD_MOVIES':
      return {Response: 'Loading'}
      break;
    
    case 'RESET_STATE':
      return null
      break;
  }
  return state
}