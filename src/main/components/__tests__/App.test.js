import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

describe('App', () => {
  it('renders a Router', () => {
    const component = shallow(<App />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
