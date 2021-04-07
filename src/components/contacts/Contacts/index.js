import React, { Fragment, useContext, useEffect, useState } from 'react';
import ContactContext from '../../../context/contact/context';
import ContactItem from '../ContactItem';
import { getAll } from '../../../services/contacts';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, setContacts } = contactContext;

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
          setContacts(results);
        }
        setFetching(false);
      }
    }
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  const list = filtered !== null ? filtered : contacts;

  if (filtered && list.length === 0) {
    return <h4>We couldn't find any contacts</h4>;
  }

  return (
    <Fragment>
      <span>{alert}</span>
      {list &&
        list.map((contact, index) => index < 5 && (
          <ContactItem key={contact._id || index} contact={contact} />
        ))}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
