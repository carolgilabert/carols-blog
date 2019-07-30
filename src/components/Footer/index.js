import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Box from '../Box';

library.add(fab);

const StyledFooterWrapper = styled.div`
  margin: 20px 0px;
  border-top: 2px #000 dashed;

  & a {
    box-shadow: none;
  }

  & a:hover {
    color: rgba(0, 96, 193, 0.25);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 0 20px;
`;

const Footer = ({ name, email, twitter, instagram, linkedin, gitlab }) => (
  <StyledFooterWrapper>
    <Box px={[3, 3, 1]} textAlign="center" mt={20}>
      <span>{`Copyright © 2019 ${name}. Say hello 👋 `}</span>
      <OutboundLink href={email} target="_blank">
        <StyledFontAwesomeIcon icon={faAt} />
      </OutboundLink>
      <OutboundLink href={twitter} target="_blank">
        <StyledFontAwesomeIcon icon={['fab', 'twitter']} />
      </OutboundLink>
      <OutboundLink href={instagram} target="_blank">
        <StyledFontAwesomeIcon icon={['fab', 'instagram']} />
      </OutboundLink>
      <OutboundLink href={linkedin} target="_blank">
        <StyledFontAwesomeIcon icon={['fab', 'linkedin']} />
      </OutboundLink>
      <OutboundLink href={gitlab} target="_blank">
        <StyledFontAwesomeIcon icon={['fab', 'gitlab']} />
      </OutboundLink>
    </Box>
  </StyledFooterWrapper>
);

Footer.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  gitlab: PropTypes.string,
  linkedin: PropTypes.string
};

Footer.defaultProps = {
  name: 'Carolina Gilabert',
  email: 'mailto:carolgilabert@gmail.com',
  twitter: 'https://twitter.com/CarolSaysThings',
  instagram: 'https://www.instagram.com/carolgilabert',
  gitlab: 'https://gitlab.com/carolgilabert',
  linkedin: 'https://www.linkedin.com/in/carolgilabert'
};

export default Footer;
