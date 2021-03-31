import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, NavMenu, Title } from './styles';

const navList = [
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Login',
    link: '/login',
  },
  {
    text: 'Register',
    link: '/register',
  },
  {
    text: 'Tracker',
    link: '/tracker',
  },
];

const Navbar = ({ title, icon }) => {
  return (
    <Nav>
      <Title>
        <i className={icon} />
        {title}
      </Title>
      <NavMenu>
        {navList &&
          navList.map(({ text, link }) => (
            <li key={link}>
              <Link to={link}>{text}</Link>
            </li>
          ))}
      </NavMenu>
    </Nav>
  );
};

Navbar.propTypes = {
  title: string.isRequired,
  icon: string,
};

Navbar.defaultProps = {
  title: 'Contact / Interview / Tracker',
  icon: 'fal fa-address-card',
};

export default Navbar;
