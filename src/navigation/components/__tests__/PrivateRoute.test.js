import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

describe('PrivateRoute', () => {
  it('renders', () => {
    const component = shallow(<PrivateRoute />);
    expect(component.type()).toBe(Route);
  });

  it('passes props correctly', () => {
    const aProp = 'a prop';
    const component = shallow(<PrivateRoute aProp={aProp} />);
    expect(component.find(Route).prop('aProp')).toBe(aProp);
  });

  it('renders passed component when authenticated', () => {
    const isAuthenticated = jest.fn(() => true);
    const PassedComponent = () => <div />;
    const component = mount(
      <Router>
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          component={PassedComponent}
        />
      </Router>
    );
    expect(component.find(PassedComponent).length).toBe(1);
  });

  it('redirects to /login when not authenticated', () => {
    const isAuthenticated = jest.fn(() => false);
    const PassedComponent = () => <div />;
    const component = mount(
      <Router>
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          component={PassedComponent}
        />
      </Router>
    );
    const redirectComponent = component.find(Redirect);
    expect(redirectComponent.length).toBe(1);
    expect(redirectComponent.prop('to')).toEqual({ pathname: '/login' });
  });
});
