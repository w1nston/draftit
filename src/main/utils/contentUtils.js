import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPage from '../../authentication/login/components/LoginPage';

export const loginRouteRenderer = isAuthenticated => () => {
  if (isAuthenticated()) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  return <LoginPage />;
};

