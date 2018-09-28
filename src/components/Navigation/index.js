import React from 'react';
import { css } from 'react-emotion';
import { Link } from '../Misc';

const linkStyles = css`
  box-shadow: none;
  margin: 0 10px;
`;

const menuStyles = css`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Navigation = () => (
  <div className={menuStyles}>
    <Link className={linkStyles} to="/">
      Home
    </Link>
    <Link className={linkStyles} to="/about">
      About
    </Link>
    <Link className={linkStyles} to="/blog">
      Blog
    </Link>
  </div>
);

export default Navigation;
