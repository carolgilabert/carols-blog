import styled, { css } from 'styled-components';

const sharedStyles = css`
    font-family: 'Avalanche';
    font-weight: 800;
    color: ${({ theme }) => theme.highContrastColour};
    text-shadow: 5px 5px ${({ theme }) => theme.accentColour};
`;

export const H1 = styled.h1`
    ${sharedStyles}
    font-size: 3rem;

    @media only screen and (min-width: 400px) {
        font-size: 4rem;
    }

    @media only screen and (min-width: 900px) {
        font-size: 4.5rem;
    }
`;

export const H2 = styled.h2`
    ${sharedStyles}
    font-size: 1.6rem;

    @media only screen and (min-width: 400px) {
        font-size: 2rem;
    }

    @media only screen and (min-width: 900px) {
        font-size: 2.4rem;
    }
`;
export const H3 = styled.h3`
    ${sharedStyles}
    font-size: 3rem;

    @media only screen and (min-width: 400px) {
        font-size: 4rem;
    }

    @media only screen and (min-width: 900px) {
        font-size: 4.5rem;
    }
`;
