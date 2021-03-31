import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, name, value, handleOnChange }) => {
  return (
    <input
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleOnChange}
    ></input>
  );
};

Input.propTypes = {};

export default Input;
