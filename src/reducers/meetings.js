import {
  GET_MEETINGS_SUCCESS, GET_MEETINGS_PENDING, POST_MEETINGS_SUCCESS, POST_MEETINGS_PENDING
} from '../actions/meetings'

export default(state = [], action) => {
  switch(action.type){
    case GET_MEETINGS_SUCCESS:
      return [...action.payload.data];
    case GET_MEETINGS_PENDING:
      return state;
    case POST_MEETINGS_SUCCESS:
      return [...action.payload.data];
    case POST_MEETINGS_PENDING:
      return state;
    default:
      return state;
  }
}
