import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import ContactContext from '../../../context/contact/context';

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
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'DevOps',
  });
  const { name, email, phone, type } = contact;

  const handleOnChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'FullStack',
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Add Contact</h2>
      <ul>
        {formElements.map(
          ({ value, inputName, inputType, placeholder }, index) =>
            inputType !== 'radio' && (
              <li key={inputName}>
                <Input
                  handleOnChange={handleOnChange}
                  value={contact[index]}
                  name={inputName}
                  placeholder={placeholder}
                  type={inputType}
                />
              </li>
            )
        )}
        <div>
          <h5>Job type</h5>
          {formElements.map(
            ({ value, inputName, inputType, placeholder }, index) =>
              inputType === 'radio' && (
                <Fragment key={placeholder}>
                  <label>{placeholder}</label>
                  {console.log(contact.type , inputName, contact.type === inputName)}
                  <Input 
                  checked={contact.type === inputName}
                  name="type"
                  value={inputName}
                  handleOnChange={handleOnChange} type="radio" />
                </Fragment>
              )
          )}
 
        </div>
      </ul>
      <button>Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
