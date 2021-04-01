import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../../context/contact/context';
import ContactState from '../../../context/contact/state';
import ContactItem from '../ContactItem';
import { getAll } from '../../../services/contacts';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  const [fetching, setFetching] = useState(false);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    async function getData() {
      if (!fetching) {
        setFetching(true);
        const results = await getAll();
        if (results.status) {
          setAlert('Cannot load contacts ' + results.status);
        } else {
          contactContext.setContacts(results);
        }
        setFetching(false);
      }
    }
    getData();
  }, []);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      <span>{alert}</span>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
