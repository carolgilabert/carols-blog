/** @jsx jsx */
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import GatsbyLink from 'gatsby-link';

const timestamp = css`
  color: #767676;
  font-size: 0.9rem;
  font-family: 'Cousine', monospace;
  margin: 0 0 4px;
`;

const Timestamp = styled.time`
  ${timestamp};
`;

const link = css`
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
  return (
    <GatsbyLink css={link} {...props}>
      {children}
    </GatsbyLink>
  );
};
/* eslint-enable */

const readTimeStyles = css`
  font-size: 0.9em;
  font-style: italic;
`;

const ReadTime = ({ time }) => (
  <span css={readTimeStyles}>{`${time} read`}</span>
);
ReadTime.propTypes = { time: PropTypes.string.isRequired };

export { Timestamp, Link, ReadTime };
