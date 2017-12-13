import {
  GET_MEETINGS_SUCCESS, GET_MEETINGS_PENDING
} from '../actions/meetings'

export default(state = [], action) => {
  switch(action.type){
    case GET_MEETINGS_SUCCESS:
      return [...action.payload.data];
    case GET_MEETINGS_PENDING:
      return state;
    default:
      return state;
  }
}
