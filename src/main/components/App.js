import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from '../../navigation/components/NavBar';
import Content from './Content';

const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Content />
    </Fragment>
  </Router>
);

export default App;
