import React, { useState } from 'react';
import Input from '../../Input';
import { login } from '../../../services/contacts';
// import { Redirect } from 'react-router-dom';
import { LoginWrapper } from './styles';
import { Title } from '../../../ui/ui-title';
import Button from '../../../ui/ui-button';

const Register = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    return login(credentials).then(() => {
      window.location.href = '/';
      // return <Redirect push to="/" />;
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <LoginWrapper>
        <Title>Register</Title>
        <label>Name</label>
        <Input name="text" handleOnChange={handleOnChange} />
        <label>Email</label>
        <Input name="email" handleOnChange={handleOnChange} />
        <label>Password</label>
        <Input name="password" handleOnChange={handleOnChange} />
        <label>Confirm Password</label>
        <Input name="password" handleOnChange={handleOnChange} />
        <Button>Register</Button>
      </LoginWrapper>
    </form>
  );
};

Register.propTypes = {};

export default Register;
