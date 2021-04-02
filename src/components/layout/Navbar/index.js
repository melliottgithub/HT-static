import React from 'react';
import { string } from 'prop-types';
import { Link, /* useHistory */ } from 'react-router-dom';
import { Nav, NavMenu, Title } from './styles';
import { isAuthenticated } from '../../../services/contacts';

const Navbar = ({ title, icon }) => {
  // const history = useHistory();

  const Logout = (e) => {
    e.preventDefault()
    localStorage.clear();
    // history.push('/login');
    window.location.href = "/login";
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
              <Link to={'/contacts'}>Contacts</Link>
            </li>
            <li onClick={Logout}>
              <a href="/#">Logout</a> 
              <i class="fal fa-sign-out"></i>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
            <li>
              <Link to={'/register'}>Register</Link>
            </li>
          </>
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
