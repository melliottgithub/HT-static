import React, { useState } from 'react';
import Input from '../../Input';
import { login } from '../../../services/contacts';
// import { Redirect } from 'react-router-dom';
import { Alert, LoginWrapper } from './styles';
import { Title } from '../../../ui/ui-title';
import  Button from '../../../ui/ui-button';
// import { useHistory } from 'react-router';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState();
  // const history = useHistory();

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    return login(credentials).then((auth) => {
      if (auth) {
        setMessage('');
        // history.push("/contacts")
        window.location.href = "/contacts";
      } else {
        setMessage('Invalid login');
      }
    });
  };
  return (
    <>
    <Alert>{message ? <span>{message}</span> : null}</Alert>
    <form onSubmit={handleOnSubmit}>
      <LoginWrapper>
        <Title>Login</Title>
        <label>Email</label>
        <Input type="text" name="email" onChange={handleOnChange} />
        <label>Password</label>
        <Input type="password" name="password" onChange={handleOnChange} />
        <Button>Login</Button>
      </LoginWrapper>
    </form>
    </>
  );
};

Login.propTypes = {};

export default Login;
