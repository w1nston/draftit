import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Content from '../Content';

describe('Content', () => {
  it('renders', () => {
    const component = shallow(<Content />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
