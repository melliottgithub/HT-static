import React, { Fragment, useContext, useEffect, useState } from 'react';
import ContactContext from '../../../context/contact/context';
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

  const list = filtered !== null ? filtered : contacts;
  return (
    <Fragment>
      <span>{alert}</span>
      {list &&
        list.map((contact, index) => (
          <ContactItem key={contact._id || index} contact={contact} />
        ))}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
