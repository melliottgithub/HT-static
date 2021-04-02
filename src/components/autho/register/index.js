import React, { useState } from 'react';
import Input from '../../Input';
import { register } from '../../../services/contacts';
// import { Redirect } from 'react-router-dom';
import { LoginWrapper } from './styles';
import { Title } from '../../../ui/ui-title';
import Button from '../../../ui/ui-button';

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    return register(userData).then((user) => {
      console.log(user);
      window.location.href = '/';
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <LoginWrapper>
        <Title>Register</Title>
        <label>Name</label>
        <Input name="name" type="text" onChange={handleOnChange} />
        <label>Email</label>
        <Input name="email" type="email" onChange={handleOnChange} />
        <label>Password</label>
        <Input name="password" type="password" onChange={handleOnChange} />
        <label>Confirm Password</label>
        <Input name="passwordConfirm" type="password" onChange={handleOnChange} />
        <Button>Register</Button>
      </LoginWrapper>
    </form>
  );
};

Register.propTypes = {};

export default Register;
