import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GatsbyLink from 'gatsby-link';

export const LinkStyles = css`
    color: inherit;
    text-decoration: underline solid var(--highContrastColour);
    text-decoration-thickness: 2px;
    transition: background-color 0.5s ease;
`;

export const LinkHoverStyles = css`
    background-color: var(--highContrastColour);
    color: var(--accentColour);
`;

export const InternalLink = styled(GatsbyLink)`
    ${LinkStyles}
    &:hover {
        ${LinkHoverStyles}
    }
`;

const StyledLink = styled.a`
    ${LinkStyles}
    &:hover {
        ${LinkHoverStyles}
    }
`;

const Link = ({ href, rel, children }) => (
    <StyledLink href={href} target="_blank" rel={`noopener noreferrer ${rel}`}>
        {children}
    </StyledLink>
);

Link.defaultProps = {
    rel: ''
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    rel: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Link;
