import {
  GET_NOTES_SUCCESS, GET_NOTES_PENDING, POST_NOTES_SUCCESS, POST_NOTES_PENDING
} from '../actions/notes'

export default(state = [], action) => {
  switch(action.type){
    case GET_NOTES_SUCCESS:
      return [...action.payload.data];
    case GET_NOTES_PENDING:
      return state;
    case POST_NOTES_SUCCESS:
      return [...action.payload.data];
    case POST_NOTES_PENDING:
      return state;
    default:
      return state;
  }
}
