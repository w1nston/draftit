import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../NavBar';

describe('NavBar', () => {
  it('renders', () => {
    const component = shallow(<NavBar />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
