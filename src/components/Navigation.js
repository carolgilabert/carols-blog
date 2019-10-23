/* eslint-disable jsx-a11y/accessible-emoji */
// eslint doesn't recognise a styled span
import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
`;

const StyledSpan = styled.span`
    @media (max-width: 360px) {
        display: none;
    }
`;

const Navigation = () => (
    <StyledNav>
        <NavLink to="/">
            Home{' '}
            <StyledSpan role="img" aria-label="house emoji">
                🏡
            </StyledSpan>
        </NavLink>
        <NavLink to="/about">
            About{' '}
            <StyledSpan role="img" aria-label="woman with hand on chin emoji">
                💁‍♀️
            </StyledSpan>
        </NavLink>
        <NavLink to="/blog">
            Blog{' '}
            <StyledSpan role="img" aria-label="paper and pencil emoji">
                📝
            </StyledSpan>
        </NavLink>
    </StyledNav>
);

export default Navigation;
