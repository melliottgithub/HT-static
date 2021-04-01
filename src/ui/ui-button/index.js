import React, { useState } from 'react';
import {Button , StyledButtonLabel} from './styles';

//const Input = ({ type,width, placeholder, name, value, checked, handleOnChange }) => {
const ButtonComponent = ({width , children}) => {
  const [position, setPosition ] = useState({});
    const handleMouseMove = (e) => { 
        setPosition({ x :  e.pageX - e.target.offsetLeft, y : e.pageY - e.target.offsetTop})
  }

  return (
    <Button onMouseMove={handleMouseMove} width={width} x={position.x} y={position.y}>
        <StyledButtonLabel>{children}</StyledButtonLabel>
    </Button>
  );
};

ButtonComponent.propTypes = {};

export default ButtonComponent;
