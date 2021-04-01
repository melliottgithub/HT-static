import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../../context/contact/context';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filteredContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const handleOnChange = (e) => {
    if (text.current.value !== '') {
      filteredContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <input
      ref={text}
      type="text"
      placeholder="Filter Contacts..."
      onChange={handleOnChange}
    ></input>
  );
};

ContactFilter.propTypes = {};

export default ContactFilter;
