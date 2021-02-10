import React from 'react';
import {
  Home,
  About,
} from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ABOUT} component={About} />
    </Router>
  );
};
