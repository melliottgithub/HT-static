import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import ContactContext from '../../../context/contact/context';
import { Title } from '../../../ui/ui-title';
import { Button } from '../../../ui/ui-button';

const formElements = [
  {
    inputType: 'text',
    inputName: 'name',
    placeholder: 'Name',
  },
  {
    inputType: 'email',
    inputName: 'email',
    placeholder: 'Email',
  },
  {
    inputType: 'phone',
    inputName: 'phone',
    placeholder: 'Phone number',
  },
  {
    inputType: 'radio',
    inputName: 'FullStack',
    placeholder: 'FullStack',
    value: 'fullstack',
  },
  {
    inputType: 'radio',
    inputName: 'Backend',
    placeholder: 'Backend',
    value: 'backend',
  },
  {
    inputType: 'radio',
    inputName: 'FrontEnd',
    placeholder: 'FrontEnd',
    value: 'frontend',
  },
  {
    inputType: 'radio',
    inputName: 'DevOps',
    placeholder: 'DevOps',
    value: 'devops',
  },
];

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'FullStack',
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'FullStack',
      });
    }
  }, [contactContext, current]);
  const { name, email, phone, type } = contact;
  /* FIX */
  const list = [name, email, phone, type];

  const handleOnChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    handleOnClear();
    // setContact({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   type: 'FullStack',
    // });
  };
  const handleOnClear = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <Title>{current ? 'Edit Contact' : 'Add Contact'}</Title>
      <ul>
        {formElements.map(
          ({ value, inputName, inputType, placeholder }, index) =>
            inputType !== 'radio' && (
              <li key={inputName}>
                <Input
                  width="100%"
                  handleOnChange={handleOnChange}
                  value={list[index]}
                  name={inputName}
                  placeholder={placeholder}
                  type={inputType}
                />
              </li>
            )
        )}
        <h4>Job type</h4>
        {/* FIX this soon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {formElements.map(
            ({ value, inputName, inputType, placeholder }, index) =>
              inputType === 'radio' && (
                <Fragment key={index}>
                  <Input
                    checked={contact.type === inputName}
                    name="type"
                    value={inputName}
                    handleOnChange={handleOnChange}
                    type="radio"
                  />
                  <label>{placeholder}</label>
                </Fragment>
              )
          )}
        </div>
      </ul>
      <Button>{current ? 'Update contact' : 'Add contact'}</Button>
      {current && <Button onClick={handleOnClear}>Clear</Button>}
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
