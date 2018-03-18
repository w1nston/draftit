import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPage from '../../../authentication/login/components/LoginPage';
import { loginRouteRenderer } from '../contentUtils';

describe('loginRouteRenderer', () => {
  it('redirects to root path when authenticated', () => {
    const isAuthenticated = jest.fn(() => true);
    expect(loginRouteRenderer(isAuthenticated)()).toEqual(
      <Redirect to={{ pathname: '/' }} />
    );
  });

  it('renders login page when not authenticated', () => {
    const isAuthenticated = jest.fn(() => false);
    expect(loginRouteRenderer(isAuthenticated)()).toEqual(<LoginPage />);
  });
});
