import React from 'react';
import PropTypes from 'prop-types';

const Register = (props) => {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h1>Register</h1>
        <label>Name</label>
        <Input name="text" handleOnChange={handleOnChange} />
        <label>Email</label>
        <Input name="email" handleOnChange={handleOnChange} />
        <label>Password</label>
        <Input name="password" handleOnChange={handleOnChange} />
        <label>Confirm Password</label>
        <Input name="password" handleOnChange={handleOnChange} />
        <button>Register</button>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
