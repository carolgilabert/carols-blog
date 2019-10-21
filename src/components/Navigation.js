import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
`;

const Navigation = () => (
    <StyledNav>
        <NavLink to="/">
            Home{' '}
            <span role="img" aria-label="house emoji">
                🏡
            </span>
        </NavLink>
        <NavLink to="/about">
            About{' '}
            <span role="img" aria-label="woman with hand on chin emoji">
                💁‍♀️
            </span>
        </NavLink>
        <NavLink to="/blog">
            Blog{' '}
            <span role="img" aria-label="paper and pencil emoji">
                📝
            </span>
        </NavLink>
    </StyledNav>
);

export default Navigation;
