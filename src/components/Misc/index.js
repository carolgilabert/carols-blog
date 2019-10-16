import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import DeskImage from '../../images/desk.svg';

const Timestamp = styled.time`
  font-size: 0.9rem;
  margin: 0 0 4px;
`;

const StyledGatsbyLink = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;
  box-shadow: inset 0 -5px 0 ${({ theme }) => theme.linkUnderlineColour};
  -webkit-transition: box-shadow 0.4s ease-in-out;
  transition: box-shadow 0.4s ease-in-out;

  &:hover {
    box-shadow: inset 0 -300px 0 ${({ theme }) => theme.linkUnderlineColour};
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

const DeskSVG = styled(DeskImage)`
  & .light-beam {
    fill: ${({ theme }) => theme.lightBeamColour};
  }
`;

const ShadedH1 = styled.h1`
  text-shadow: 5px 5px ${({ theme }) => theme.textShadowColour};
`;

export { Timestamp, Link, ReadTime, DeskSVG, ShadedH1 };
