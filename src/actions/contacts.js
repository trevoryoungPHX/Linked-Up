import axios from 'axios';


export const GET_CONTACTS_PENDING = 'GET_CONTACTS_PENDING'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const POST_CONTACTS_PENDING = 'POST_CONTACTS_PENDING'
export const POST_CONTACTS_SUCCESS = 'POST_CONTACTS_SUCCESS'
export const DELETE_CONTACTS_PENDING = 'DELETE_CONTACTS_PENDING'
export const DELETE_CONTACTS_SUCCESS = 'DELETE_CONTACTS_SUCCESS'

export const getContacts = () =>{
  return async (dispatch) => {
    dispatch({type: GET_CONTACTS_PENDING})
      let contacts = await axios.get(`https://linked-up-backend.herokuapp.com/contacts`)
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: contacts
    })
  }
}

export const postContacts = (newContact) =>{
  return async (dispatch) => {
    dispatch({type: POST_CONTACTS_PENDING})
      let contacts = await axios.post(`https://linked-up-backend.herokuapp.com/contacts`, newContact)
    dispatch({
      type: POST_CONTACTS_SUCCESS,
      payload: contacts
    })
  }
}

export const deleteContacts = (id) =>{
  return async (dispatch) => {
    dispatch({type: DELETE_CONTACTS_PENDING})
      let contacts = await axios.delete(`https://linked-up-backend.herokuapp.com/contacts/delete/${id}`)
    dispatch({
      type: DELETE_CONTACTS_SUCCESS,
      payload: contacts
    })
  }
}
