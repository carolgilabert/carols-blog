import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SEO from '../SEO';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
      margin: 0;
  }
`;

const StyledAppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.backgroundColour};
    color: ${({ theme }) => theme.primaryColour};
`;

const StyledContentWrapper = styled.main`
    flex: 1;
`;

const PageLayout = ({ children, title, description, image }) => (
    <StyledAppWrapper>
        <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
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
