import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import ContactState from './context/contact/state';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <ContactState>
      <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
      </Router>
    </ContactState>
  );
};

export default App;
