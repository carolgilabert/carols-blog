import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Box from '../Box';
import AtIcon from '../../images/at.svg';
import TwitterIcon from '../../images/twitter.svg';
import LinkedInIcon from '../../images/linkedin.svg';
import GitLabIcon from '../../images/gitlab.svg';

const StyledFooterWrapper = styled.div`
  margin: 20px 0px;
  border-top: 2px ${({ theme }) => theme.textColour} dashed;

  & a {
    box-shadow: none;
    color: currentColor;
  }

  & a:hover {
    color: ${({ theme }) => theme.linkHighlightColour};
  }
`;

const Footer = ({ name, email, twitter, linkedin, gitlab }) => (
  <StyledFooterWrapper>
    <Box px={[3, 3, 1]} textAlign="center" mt={20}>
      <span>{`Copyright © 2019 ${name}. Say hello 👋 `}</span>
      <OutboundLink href={email} target="_blank">
        <AtIcon />
      </OutboundLink>
      <OutboundLink href={twitter} target="_blank">
        <TwitterIcon />
      </OutboundLink>
      <OutboundLink href={linkedin} target="_blank">
        <LinkedInIcon />
      </OutboundLink>
      <OutboundLink href={gitlab} target="_blank">
        <GitLabIcon />
      </OutboundLink>
    </Box>
  </StyledFooterWrapper>
);

Footer.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  twitter: PropTypes.string,
  gitlab: PropTypes.string,
  linkedin: PropTypes.string
};

Footer.defaultProps = {
  name: 'Carolina Gilabert',
  email: 'mailto:carolgilabert@gmail.com',
  twitter: 'https://twitter.com/CarolSaysThings',
  gitlab: 'https://gitlab.com/carolgilabert',
  linkedin: 'https://www.linkedin.com/in/carolgilabert'
};

export default Footer;
