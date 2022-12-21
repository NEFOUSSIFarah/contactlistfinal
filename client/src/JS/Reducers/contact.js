//import

const {
  LOAD_CONTACT,
  SUCC_CONTACT,
  FAIL_CONTACT,
  ONE_CONTACT,
} = require('../ActionTypes/contact')

//initialstate
const initialState = {
  contactList: [],
  error: [],
  load: false,
  contactToGet: {},
}

//pure function
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, load: true }
    case SUCC_CONTACT:
      return { ...state, load: false, contactList: payload.contactList }
    case ONE_CONTACT:
      return { ...state, contactToGet: payload.contactToGet, load: false }
    case FAIL_CONTACT:
      return { ...state, load: false, errors: payload }

    default:
      return state
  }
}
// export

export default contactReducer
