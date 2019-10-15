import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SEO from '../SEO';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';

const prefersDarkMode =
  'matchMedia' in window
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false;
const themeObj = prefersDarkMode ? darkTheme : lightTheme;

/* eslint-disable */
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;
/* eslint-enable */

const StyledAppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColour};
  color: ${({ theme }) => theme.fontColour};
`;

const StyledContentWrapper = styled.main`
  flex: 1;
`;

const PageLayout = ({ children, title, description, image }) => (
  <ThemeProvider theme={themeObj}>
    <StyledAppWrapper>
      <GlobalStyles />
      <SEO title={title} description={description} image={image} />
      <Navigation />
      <StyledContentWrapper>{children}</StyledContentWrapper>
      <Footer />
    </StyledAppWrapper>
  </ThemeProvider>
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
