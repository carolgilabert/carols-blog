import styled, { css } from 'styled-components';
import GatsbyLink from 'gatsby-link';

export const LinkStyles = css`
    text-decoration: none;
    color: inherit;
    box-shadow: inset 0 -5px 0 var(--highContrastColour);
    -webkit-transition: box-shadow 0.4s ease-in-out, color 0.4s;
    transition: box-shadow 0.4s ease-in-out, color 0.4s;
    padding: 3px;
`;

export const LinkHoverStyles = css`
    box-shadow: inset 0 -300px 0 var(--highContrastColour);
    color: var(--accentColour);
`;

const Link = styled(GatsbyLink)`
    ${LinkStyles}
    &:hover {
        ${LinkHoverStyles}
    }
`;

export default Link;
