import styled, { css } from 'styled-components';

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

const Link = styled.a`
    ${LinkStyles}
    &:hover {
        ${LinkHoverStyles}
    }
`;

export default Link;
