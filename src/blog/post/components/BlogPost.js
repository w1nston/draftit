import React, { Fragment } from 'react';

// TODO: fetch data from persistence layer...
const BlogPost = props => (
  <Fragment>
    <h2>{props.match.params.title}</h2>
    <div>TODO: Add content...</div>
  </Fragment>
);

export default BlogPost;
