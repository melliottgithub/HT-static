import React, { useState } from 'react';
import Input from '../../Input';
import { register } from '../../../services/contacts';
// import { Redirect } from 'react-router-dom';
import { LoginWrapper } from './styles';
import { Title } from '../../../ui/ui-title';
import Button from '../../../ui/ui-button';
import { Alert } from '../login/styles';
// import { useHistory } from 'react-router';

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState();
  // const history = useHistory();

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    return register(userData).then((user) => {
      if (user) {
        setMessage('');
        // history.push("/contacts")
        window.location.href = "/contacts";
      } else {
        setMessage('Invalid credentials');
      }
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <Alert>{message ? <span>{message}</span> : null}</Alert>
      <LoginWrapper>
        <Title>Register</Title>
        <label>Name</label>
        <Input name="name" type="text" required onChange={handleOnChange} />
        <label>Email</label>
        <Input name="email" type="email" required onChange={handleOnChange} />
        <label>Password (6 characters min)</label>
        <Input name="password" type="password" required minlength="6" onChange={handleOnChange} />
        <label>Confirm Password</label>
        <Input name="passwordConfirm" type="password" required onChange={handleOnChange} />
        <Button>Register</Button>
      </LoginWrapper>
    </form>
  );
};

Register.propTypes = {};

export default Register;
