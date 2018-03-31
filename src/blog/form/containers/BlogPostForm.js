import React from 'react';
import { withRouter } from 'react-router-dom';
import { Subscribe } from 'unstated';
import BlogPostForm from '../components/BlogPostForm';
import { PostsContainer } from '../../../store/blog/PostsContainer';

export const blogPostFormSubscription = () => (
  <BlogPostForm />
);

export const BlogPostFormSubscriber = props => (
  <Subscribe to={[PostsContainer]}>
    {blogPostFormSubscription}  
  </Subscribe>
);

export default withRouter(BlogPostFormSubscriber);
