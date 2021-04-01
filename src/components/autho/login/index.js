import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import { login } from '../../../services/contacts';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: ''});

    const handleOnChange = (e) => {
        console.log(e.target)
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('credentials', credentials)
    login(credentials);
    console.log('click ');
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Input name="email" handleOnChange={handleOnChange} />
        <Input name="password" handleOnChange={handleOnChange} />
        <Input />
        <button>Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
