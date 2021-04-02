import React from 'react';
import { StyledInput } from './styles';

//const Input = ({ type,width, placeholder, name, value, checked, handleOnChange }) => {
const Input = (props) => {
  return <StyledInput {...props} />;
};

Input.propTypes = {};

export default Input;
