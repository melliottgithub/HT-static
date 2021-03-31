import React, { Fragment, useContext } from 'react';
import { object } from 'prop-types';
import ContactContext from '../../../context/contact/context';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;
  const { id, name, email, type, phone } = contact;

  const handleOnClick = () => {
    deleteContact(id);
  };
  return (
    <Fragment>
      <h3>
        {name} <span> {type}</span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fal fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-mobile-android-alt" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button>Edit</button>
        <button onClick={handleOnClick}>Delete</button>
      </p>
    </Fragment>
  );
};

ContactItem.propTypes = { contact: object.isRequired };

export default ContactItem;
