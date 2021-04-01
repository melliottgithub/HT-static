import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

//const Input = ({ type,width, placeholder, name, value, checked, handleOnChange }) => {
  const Input = (props) => {
  return (
    <StyledInput {...props}
    /*
      width={width}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleOnChange}
      */
    />
  );
};

Input.propTypes = {};

export default Input;
