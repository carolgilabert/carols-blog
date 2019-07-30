import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const Timestamp = styled.time`
  color: #767676;
  font-size: 0.9rem;
  font-family: 'Cousine', monospace;
  margin: 0 0 4px;
`;

const StyledGatsbyLink = styled(GatsbyLink)`
  box-shadow: inset 0 -5px 0 rgba(0, 96, 193, 0.25);
  -webkit-transition: box-shadow 0.4s ease-in-out;
  transition: box-shadow 0.4s ease-in-out;
  &:hover {
    box-shadow: inset 0 -300px 0 rgba(0, 96, 193, 0.25);
  }
  &:focus {
    outline: 0;
  }
`;

/* eslint-disable react/prop-types */
const Link = props => {
  const { children } = props;
  return <StyledGatsbyLink {...props}>{children}</StyledGatsbyLink>;
};
/* eslint-enable */

const UnstyledReadTime = ({ time }) => <span>{`${time} read`}</span>;
UnstyledReadTime.propTypes = { time: PropTypes.string.isRequired };

const ReadTime = styled(UnstyledReadTime)`
  font-size: 0.9em;
  font-style: italic;
`;

export { Timestamp, Link, ReadTime };
