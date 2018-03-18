import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../../authentication/login/components/LoginPage';

export const loginRouteRenderer = isAuthenticated => () => {
  if (isAuthenticated()) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  return <LoginPage />;
};

const Content = ({ isAuthenticated }) => (
  <Switch>
    <Route exact path="/login" render={loginRouteRenderer} />
  </Switch>
);

export default Content;
