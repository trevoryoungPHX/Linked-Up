import axios from 'axios';

export const GET_MEETINGS_PENDING = 'GET_MEETINGS_PENDING'
export const GET_MEETINGS_SUCCESS = 'GET_MEETINGS_SUCCESS'
export const POST_MEETINGS_PENDING = 'POST_MEETINGS_PENDING'
export const POST_MEETINGS_SUCCESS = 'POST_MEETINGS_SUCCESS'

export const getMeetings = (id) =>{
  return async (dispatch) => {
    dispatch({type: GET_MEETINGS_PENDING})
      let meetings = await axios.get(`https://linked-up-backend.herokuapp.com/meetings/${id}`)
    dispatch({
      type: GET_MEETINGS_SUCCESS,
      payload: meetings
    })
  }
}

export const postMeetings= (newMeeting) =>{
  return async (dispatch) => {
    dispatch({type: POST_MEETINGS_PENDING})
      let meetings = await axios.post(`https://linked-up-backend.herokuapp.com/meetings/`, newMeeting)
    dispatch({
      type: POST_MEETINGS_SUCCESS,
      payload: meetings
    })
  }
}
