import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    render={props =>
      isAuthenticated() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
    {...rest}
  />
);

export default PrivateRoute;
