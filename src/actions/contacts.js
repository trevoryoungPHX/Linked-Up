import axios from 'axios';


export const GET_CONTACTS_PENDING = 'GET_CONTACTS_PENDING'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'

export const getContacts = () =>{
  return async (dispatch) => {
    dispatch({type: GET_CONTACTS_PENDING})
      let contacts = await axios.get(`http://localhost:8000/contacts`)
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: contacts
    })
  }
}
