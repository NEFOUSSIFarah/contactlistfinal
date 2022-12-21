// Import

import {
  FAIL_CONTACT,
  LOAD_CONTACT,
  ONE_CONTACT,
  SUCC_CONTACT,
} from '../ActionTypes/contact'
import axios from 'axios'

//get all contacts
export const getallcontacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT })
  try {
    let result = await axios.get('/api/contact/getAll')
    dispatch({ type: SUCC_CONTACT, payload: result.data })
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response })
  }
}

// add newContact
export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post('/api/contact/addContact', newContact)
    dispatch(getallcontacts())
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response })
  }
}

// delete contact
export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`)
    dispatch(getallcontacts())
  } catch (error) {}
}

// edit contact
export const editContact = (id, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, newContact)
    dispatch(getallcontacts())
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response })
  }
}

// get one contact
export const getContact = (id) => async (dispatch) => {
  dispatch({ type: ONE_CONTACT })
  try {
    let result = await axios.get(`/api/contact/${id}`)
    dispatch({ type: ONE_CONTACT, payload: result.data })
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response })
  }
}
