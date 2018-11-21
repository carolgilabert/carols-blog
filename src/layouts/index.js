import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'react-emotion';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';

/* eslint-disable */
injectGlobal`
  * {
      box-sizing: border-box;
  };
  a {
    text-decoration: none;
    color: inherit;
    box-shadow: inset 0 -5px 0 rgba(0,96,193,0.25);
    -webkit-transition: box-shadow 0.4s ease-in-out;
    -webkit-transition: box-shadow 0.4s ease-in-out;
    transition: box-shadow 0.4s ease-in-out;
  };
  a:hover {
    cursor: pointer;
  };
`;
/* eslint-enable */
const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Carol&apos;s Blog</title>
      <meta
        name="description"
        content="A space for me to share my experiences. Some will be technical posts, some will be personal."
      />
    </Helmet>
    <Navigation />
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
