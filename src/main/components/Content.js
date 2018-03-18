import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../../authentication/login/components/LoginPage';
import PageNotFound from './PageNotFound';
import { loginRouteRenderer } from '../utils/contentUtils';

const Content = ({ isAuthenticated }) => (
  <Switch>
    <Route exact path="/login" render={loginRouteRenderer(isAuthenticated)} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Content;
