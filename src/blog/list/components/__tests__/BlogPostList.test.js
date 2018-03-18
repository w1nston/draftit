import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import addDays from 'date-fns/add_days';
import BlogPostList from '../BlogPostList';

describe('BlogPostList', () => {
  it('renders with no blog posts', () => {
    const component = shallow(<BlogPostList />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with blog posts', () => {
    const posts = [{ title: 'Title', createdAt: undefined, publishedAt: undefined }];
    const component = shallow(<BlogPostList posts={posts} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
