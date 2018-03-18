import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BlogPostForm from '../BlogPostForm';

describe('BlogPostForm', () => {
  it('renders', () => {
    const component = shallow(<BlogPostForm />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
