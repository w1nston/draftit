import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../LoginPage';

describe('LoginPage', () => {
  it('renders', () => {
    const component = shallow(<LoginPage />);
    expect(component.type()).toBe('form');
  });
});
