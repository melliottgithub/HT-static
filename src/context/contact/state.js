import React, { useReducer } from 'react';

import Context from './context';
import Reducer from './reducer';

import Contacts from '../../services/contacts';

import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  REMOVE_ALERT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACT,
  SET_CONTACTS,
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  //add contact
  const addContact = (contact) => {
    Contacts.addContact(contact)
      .then(added => dispatch({ type: ADD_CONTACT, payload: added }))
      .catch(err => console.log(err));
  };
  //delete contact
  const deleteContact = (_id) => {
    Contacts.removeContact(_id)
      .then(added => dispatch({ type: DELETE_CONTACT, payload: _id }))
      .catch(err => console.log(err));
  };
  //set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //update contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const setContacts = (contacts) => {
    dispatch({ type: SET_CONTACTS, payload: contacts });
  };
  //update contact
  const updateContact = (contact) => {
    Contacts.updateContact(contact)
      .then(updated => dispatch({ type: UPDATE_CONTACT, payload: updated }))
      .catch(err => console.log(err));
  };
  //filter contact
  const filteredContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <Context.Provider
      value={{
        filtered: state.filtered,
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        setContacts,
        updateContact,
        filteredContacts,
        clearFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContactState;
