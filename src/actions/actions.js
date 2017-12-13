import axios from 'axios';


export const GET_ACTIONS_PENDING = 'GET_ACTIONS_PENDING'
export const GET_ACTIONS_SUCCESS = 'GET_ACTIONS_SUCCESS'

export const getActions = (id) =>{
  return async (dispatch) => {
    dispatch({type: GET_ACTIONS_PENDING})
      let actions = await axios.get(`http://localhost:8000/actions/${id}`)
    dispatch({
      type: GET_ACTIONS_SUCCESS,
      payload: actions
    })
  }
}
