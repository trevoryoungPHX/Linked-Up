import axios from 'axios';


export const GET_ACTIONS_PENDING = 'GET_ACTIONS_PENDING'
export const GET_ACTIONS_SUCCESS = 'GET_ACTIONS_SUCCESS'
export const POST_ACTIONS_PENDING = 'POST_ACTIONS_PENDING'
export const POST_ACTIONS_SUCCESS = 'POST_ACTIONS_SUCCESS'
export const UPDATE_ACTIONS_PENDING = 'UPDATE_ACTIONS_PENDING'
export const UPDATE_ACTIONS_SUCCESS = 'UPDATE_ACTIONS_SUCCESS'

export const getActions = (id) =>{
  return async (dispatch) => {
    dispatch({type: GET_ACTIONS_PENDING})
      let actions = await axios.get(`https://linked-up-backend.herokuapp.com/actions/${id}`)
    dispatch({
      type: GET_ACTIONS_SUCCESS,
      payload: actions
    })
  }
}

export const postActions = (newPost) =>{
  return async (dispatch) => {
    dispatch({type: POST_ACTIONS_PENDING})
      let actions = await axios.post(`https://linked-up-backend.herokuapp.com/actions/`, newPost)
    dispatch({
      type: POST_ACTIONS_SUCCESS,
      payload: actions
    })
  }
}

export const updateActions = (id) =>{
  return async (dispatch) => {
    dispatch({type: UPDATE_ACTIONS_PENDING})
      let actions = await axios.patch(`https://linked-up-backend.herokuapp.com/actions/update/${id}`)
    dispatch({
      type: UPDATE_ACTIONS_SUCCESS,
      payload: actions
    })
  }
}
