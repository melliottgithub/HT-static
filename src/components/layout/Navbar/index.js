import React from 'react';
import { string } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Nav, NavMenu, Title } from './styles';
import { isAuthenticated } from '../../../services/contacts';

const navList = [
  {
    text: 'Contact',
    link: '/',
  },
];

const Navbar = ({ title, icon }) => {
  const history = useHistory();

  const Logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <Nav>
      <Title>
        <i className={icon} />
        {title}
      </Title>
      <NavMenu>
        {isAuthenticated() ? (
          <>
            <li>
              <Link to={'/'}>Contact</Link>
            </li>
            <li onClick={Logout}>Logout</li>
          </>
        ) : (
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
        )}
      </NavMenu>
    </Nav>
  );
};

Navbar.propTypes = {
  title: string.isRequired,
  icon: string,
};

Navbar.defaultProps = {
  title: 'Hacker Tracker',
  icon: 'fal fa-address-card',
};

export default Navbar;
