import styled, { css } from 'styled-components';

const sharedStyles = css`
    font-family: var(--headerFont);
    font-weight: 800;
    color: var(--highContrastColour);
    text-shadow: 5px 5px var(--accentColour);
`;

export const H1 = styled.h1`
    ${sharedStyles}
    font-size: var(--fontSizeH1);
`;

export const H2 = styled.h2`
    ${sharedStyles}
    font-size: var(--fontSizeH2);
`;
