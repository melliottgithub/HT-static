import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import ContactState from './context/contact/state';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import GlobalStyle from './globalStyles';
import Login from './components/autho/login';
import { isAuthenticated } from './services/contacts';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ContactState>
        <Router>
          <Navbar />
          {!isAuthenticated() ? (
            <Login />
          ) : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
          )}
        </Router>
      </ContactState>
    </Fragment>
  );
};

export default App;
