import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from '../../components/autho/login';

const About = () => {
  const [result, setResult] = useState();

  return (
    <div>
      HELLO TEAM<h1>MY new App</h1>
      <p>My contact keeper app / tracker</p>
      <p></p>
      <Login />
    </div>
  );
};

About.propTypes = {};

export default About;
