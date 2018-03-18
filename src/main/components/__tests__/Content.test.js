import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Redirect } from 'react-router-dom';
import Content, { loginRouteRenderer } from '../Content';
import LoginPage from '../../../authentication/login/components/LoginPage';

describe('Content', () => {
  it('renders', () => {
    const component = shallow(<Content />);
    expect(toJson(component)).toMatchSnapshot();
  });
});

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
