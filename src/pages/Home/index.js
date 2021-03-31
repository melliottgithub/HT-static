import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Contacts from '../../components/contacts/Contacts';
import ContactForm from '../../components/contacts/ContactForm';
import { AppWrapper, ContactFormWrapper, ContactsWrapper } from './styles';

const Home = (props) => {
  return (
    <AppWrapper>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
      <ContactsWrapper>
        <Contacts />
      </ContactsWrapper>
    </AppWrapper>
  );
};

Home.propTypes = {};

export default Home;
