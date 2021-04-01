import React, {  useContext } from 'react';
import { object } from 'prop-types';
import ContactContext from '../../../context/contact/context';
import { Card, CardLine, ContactName, ContactType } from './styles';
import { Button } from '../../../ui/ui-button';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, email, type, phone } = contact;

  const handleOnDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  const handleOnEdit = () => {
    setCurrent(contact);
  };

  return (
    <Card>
      <CardLine>
        <ContactName>{name}</ContactName>
        <ContactType>{type}</ContactType>
      </CardLine>

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
      <Button width="20%" onClick={handleOnEdit}>
        Edit
      </Button>
      <Button width="20%" onClick={handleOnDelete}>
        Delete
      </Button>
    </Card>
  );
};

ContactItem.propTypes = { contact: object.isRequired };

export default ContactItem;
