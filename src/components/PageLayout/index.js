/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SEO from '../SEO';

/* eslint-disable */
const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
    box-shadow: inset 0 -5px 0 rgba(0, 96, 193, 0.25);
    -webkit-transition: box-shadow 0.4s ease-in-out;
    -webkit-transition: box-shadow 0.4s ease-in-out;
    transition: box-shadow 0.4s ease-in-out;
  }

  a:hover {
    cursor: pointer;
  }
`;
/* eslint-enable */

const containerStyles = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const contentStyles = css`
  flex: 1;
`;

const PageLayout = ({ children, title }) => (
  <div css={containerStyles}>
    <Global styles={globalStyles} />
    <SEO title={title} keywords={['gatsby', 'application', 'react', 'blog']} />
    <Navigation />
    <div css={contentStyles}>{children}</div>
    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired
};

export default PageLayout;
