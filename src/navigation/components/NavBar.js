import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

const navStyle = css`
  display: flex;
  justify-content: space-around;
`;

const NavBar = () => (
  <Fragment>
    <nav className={navStyle}>
      <Link to="/">Posts</Link>
      <Link to="/new">New post</Link>
      <Link to="/logout">Logout</Link>
    </nav>
    <hr />
  </Fragment>
);

export default NavBar;
