import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GlobalFonts from '../../themes/fonts';
import CssVars from '../../themes/css-vars';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SEO from '../SEO';

const StyledAppWrapper = styled.div`
    min-height: 100vh;
    max-width: 900px;
    margin: var(--pageMargin);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledContentWrapper = styled.main`
    flex: 1;
`;

const PageLayout = ({ children, title, description, image }) => (
    <StyledAppWrapper>
        <GlobalFonts />
        <CssVars />
        <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
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
