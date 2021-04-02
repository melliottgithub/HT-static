import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContactState from './context/contact/state';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import GlobalStyle from './globalStyles';
import Login from './components/autho/login';
import Register from './components/autho/register';
import { isAuthenticated } from './services/contacts';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ContactState>
        <Router>
          <Navbar />
          {!isAuthenticated() ? (
          <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          </Switch>
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
