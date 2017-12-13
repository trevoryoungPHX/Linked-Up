import axios from 'axios';


export const GET_NOTES_PENDING = 'GET_NOTES_PENDING'
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS'

export const getNotes = (id) =>{
  return async (dispatch) => {
    dispatch({type: GET_NOTES_PENDING})
      let notes = await axios.get(`http://localhost:8000/notes/${id}`)
    dispatch({
      type: GET_NOTES_SUCCESS,
      payload: notes
    })
  }
}
