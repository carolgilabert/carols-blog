import React from 'react';
import styled from 'styled-components';
import { Link } from '../Misc';

const StyledLink = styled(Link)`
    margin: 0 10px;
`;

const StyledNavWrapper = styled.div`
    margin: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Navigation = () => (
    <StyledNavWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
    </StyledNavWrapper>
);

export default Navigation;
