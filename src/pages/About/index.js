import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const About = () => {
  const [result, setResult] = useState();

  useEffect(async () => {
    const response = await axios('http://192.168.0.3:5000/api/interviews');
    console.log(response);
    setResult(response);
  }, []);

  return (
    <div>
      HELLO TEAM<h1>MY new App</h1>
      <p>My contact keeper app / tracker</p>
      <p></p>
    </div>
  );
};

About.propTypes = {};

export default About;
