import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  REMOVE_ALERT,
  SET_ALERT,
  UPDATE_CONTACT,
  SET_CONTACTS
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
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
      console.log('payload', action.payload);
      
      return {
        ...state,
        contacts: [...(action.payload || [])],
        };
    default:
      return state;
    }
  };
