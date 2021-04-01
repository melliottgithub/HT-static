import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  // REMOVE_ALERT,
  // SET_ALERT,
  UPDATE_CONTACT,
  SET_CONTACTS,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_CONTACTS:
      return {
        ...state,
        contacts: [...(action.payload || [])],
      };
    case UPDATE_CONTACT:
      console.log(action.payload);
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, `gi`);
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
