import React from 'react';
import { shallow } from 'enzyme';
import { Subscribe } from 'unstated';
import { BlogPostFormSubscriber, blogPostFormSubscription } from '../BlogPostForm';
import { BlogPostForm } from '../../components/BlogPostForm';
import { PostsContainer } from '../../../../store/blog/PostsContainer';

describe('BlogPostForm subscription', () => {
  it('renders correct component', () => {
    expect(blogPostFormSubscription()).toEqual(<BlogPostForm />);
  });
});

describe('BlogPostForm subscriber', () => {
  it('subscribes to the correct container', () => {
    const component = shallow(<BlogPostFormSubscriber />);
    expect(component.type()).toBe(Subscribe);
    expect(component.prop('to')).toEqual([PostsContainer]);
  });

  it('renders the correct children', () => {
    const component = shallow(<BlogPostFormSubscriber />);
    expect(component.prop('children')).toEqual(blogPostFormSubscription);
  });
});
