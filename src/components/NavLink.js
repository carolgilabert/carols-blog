import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

const StyledGatsbyLink = styled(GatsbyLink)`
    background-color: ${({ theme }) => theme.accentColour};
    padding: 10px 15px;
    margin: 10px;
    border-radius: 3px;
    text-decoration: none;
    color: ${({ theme }) => theme.highContrastColour};
    box-shadow: 5px 5px ${({ theme }) => theme.primaryColour};

    &:hover {
        transform: scale(1.2);
    }
`;

const NavLink = ({ to, children }) => (
    <StyledGatsbyLink to={to}>{children}</StyledGatsbyLink>
);

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default NavLink;
