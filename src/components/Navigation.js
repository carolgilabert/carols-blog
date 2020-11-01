import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const StyledNav = styled.nav`
    display: flex;
    justify-content: var(--navAlignment);
`;

const Navigation = () => (
    <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/weeknotes">Weeknotes</NavLink>
    </StyledNav>
);

export default Navigation;
