import React, { useReducer } from 'react';

import Context from './context';
import Reducer from './reducer';

import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  REMOVE_ALERT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACT,
  SET_CONTACTS
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        email: 'test1@test.com',
        name: 'mike1 elliott',
        phone: '1111111111',
        type: 'personal',
      },
      {
        id: 2,
        email: 'test2@test.com',
        name: 'mike2 elliott',
        phone: '1111111111',
        type: 'personal',
      },
      {
        id: 3,
        email: 'test3@test.com',
        name: 'mike3 elliott',
        phone: '1111111111',
        type: 'personal',
      },
      {
        id: 4,
        email: 'test4@test.com',
        name: 'mike4 elliott',
        phone: '1111111111',
        type: 'personal',
      },
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  //add contact
  const addContact = (contact) => {
    contact.id = Math.random();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
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
  //filter contact
  //clear filter

  return (
    <Context.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        current: state.current,
        setCurrent,
        clearCurrent,
        setContacts
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContactState;
