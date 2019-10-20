import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

const NavLink = ({ to, children }) => (
    <GatsbyLink to={to}>{children}</GatsbyLink>
);

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default NavLink;
