import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const Link = styled(GatsbyLink)`
    text-decoration: none;
    color: inherit;
    box-shadow: inset 0 -5px 0 var(--accentColour);
    -webkit-transition: box-shadow 0.4s ease-in-out, color 0.4s;
    transition: box-shadow 0.4s ease-in-out, color 0.4s;
    padding: 3px;

    &:hover {
        box-shadow: inset 0 -300px 0 var(--accentColour);
        color: var(--highContrastColour);
    }

    &:focus {
        outline: 0;
    }
`;

export default Link;
