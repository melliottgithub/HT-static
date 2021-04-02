import React, { useState } from 'react';
import {Button , StyledButtonLabel} from './styles';

//const Input = ({ type,width, placeholder, name, value, checked, handleOnChange }) => {
const ButtonComponent = ({style, width , children, onClick}) => {
  const [position, setPosition ] = useState({});
    const handleMouseMove = (e) => { 
        setPosition({ x :  e.pageX - e.target.offsetLeft, y : e.pageY - e.target.offsetTop})
  }

  return (
    <Button style={style} onMouseMove={handleMouseMove} width={width} x={position.x} y={position.y} onClick={onClick}>
        <StyledButtonLabel>{children}</StyledButtonLabel>
    </Button>
  );
};

ButtonComponent.propTypes = {};

export default ButtonComponent;
