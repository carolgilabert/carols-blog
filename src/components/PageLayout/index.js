import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SEO from '../SEO';

/* eslint-disable */
const GlobalStyles = createGlobalStyle`
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

const StyledAppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContentWrapper = styled.main`
  flex: 1;
`;

const PageLayout = ({ children, title, description, image }) => (
  <StyledAppWrapper>
    <GlobalStyles />
    <SEO title={title} description={description} image={image} />
    <Navigation />
    <StyledContentWrapper>{children}</StyledContentWrapper>
    <Footer />
  </StyledAppWrapper>
);

PageLayout.defaultProps = {
  description: '',
  image: null
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string
};

export default PageLayout;
