import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../../context/contact/context';
import { StyledInput } from './styles';

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
    <StyledInput
      ref={text}
      type="text"
      placeholder="Filter Contacts..."
      onChange={handleOnChange}
    ></StyledInput>
  );
};

ContactFilter.propTypes = {};

export default ContactFilter;
