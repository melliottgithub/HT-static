import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import { login } from '../../../services/contacts';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <Input name="email" handleOnChange={handleOnChange} />
        <label>Password</label>
        <Input name="password" handleOnChange={handleOnChange} />
        <button>Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
