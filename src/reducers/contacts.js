import {
  GET_CONTACTS_SUCCESS, GET_CONTACTS_PENDING
} from '../actions/contacts'

export default(state = [], action) => {
  switch(action.type){
    case GET_CONTACTS_SUCCESS:
      return [...action.payload.data];
    case GET_CONTACTS_PENDING:
      return state;
    // case PATCH_CAMERA_SUCCESS:
    //   let newCameraList = state.filter((item) => item.id !== action.payload.data[0].id)
    //   return [...newCameraList, ...action.payload.data];
    // case PATCH_CAMERA_PENDING:
    //   return state;
    // case REMOVE_CAMERA_SUCCESS:
    //   let removedCameraList = state.filter((item) => item.id !== action.payload.data[0].id)
    //   return [...removedCameraList, ...action.payload.data];
    // case REMOVE_CAMERA_PENDING:
    //   return state;
    default:
      return state;
  }
}
