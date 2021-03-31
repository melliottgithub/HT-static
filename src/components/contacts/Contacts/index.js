import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import ConctactContext from '../../../context/contact/context';
import ContactItem from '../ContactItem';

const Contacts = () => {
  const contactContext = useContext(ConctactContext);
  const { contacts } = contactContext;
  console.log(contacts);
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
