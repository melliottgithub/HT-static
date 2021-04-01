import React from 'react';
import Contacts from '../../components/contacts/Contacts';
import ContactForm from '../../components/contacts/ContactForm';
import { AppWrapper, ContactFormWrapper, ContactsWrapper } from './styles';
import ContactFilter from '../../components/contacts/ContactFilter';

const Home = (props) => {
  return (
    <AppWrapper>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
      <ContactsWrapper>
        <ContactFilter />
        <Contacts />
      </ContactsWrapper>
    </AppWrapper>
  );
};

Home.propTypes = {};

export default Home;
