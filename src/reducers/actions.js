import {
  GET_ACTIONS_SUCCESS, GET_ACTIONS_PENDING
} from '../actions/actions'

export default(state = [], action) => {
  switch(action.type){
    case GET_ACTIONS_SUCCESS:
      return [...action.payload.data];
    case GET_ACTIONS_PENDING:
      return state;
    default:
      return state;
  }
}
