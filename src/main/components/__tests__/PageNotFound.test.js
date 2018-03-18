import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageNotFound from '../PageNotFound';

describe('PageNotFound', () => {
  it('renders', () => {
    const component = shallow(<PageNotFound />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
