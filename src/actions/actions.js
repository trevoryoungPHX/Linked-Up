import axios from 'axios';


export const GET_ACTIONS_PENDING = 'GET_ACTIONS_PENDING'
export const GET_ACTIONS_SUCCESS = 'GET_ACTIONS_SUCCESS'
export const POST_ACTIONS_PENDING = 'POST_ACTIONS_PENDING'
export const POST_ACTIONS_SUCCESS = 'POST_ACTIONS_SUCCESS'

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

export const postActions = (newPost) =>{
  return async (dispatch) => {
    dispatch({type: POST_ACTIONS_PENDING})
      let actions = await axios.post(`http://localhost:8000/actions/`, newPost)
    dispatch({
      type: POST_ACTIONS_SUCCESS,
      payload: actions
    })
  }
}
