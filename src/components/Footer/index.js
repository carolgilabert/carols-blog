/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Box from '../Box';

library.add(fab);

const footerStyle = css`
  margin: 20px 0px;
  border-top: 2px #000 dashed;

  & a {
    box-shadow: none;
  }

  & a:hover {
    color: rgba(0, 96, 193, 0.25);
  }
`;

const iconStyles = css`
  margin: 0 20px;
`;

const Footer = ({ name, email, twitter, instagram, linkedin, gitlab }) => (
  <div css={footerStyle}>
    <Box px={[3, 3, 1]} textAlign="center" mt={20}>
      <span>{`Copyright © 2019 ${name}. Say hello 👋 `}</span>
      <OutboundLink href={email} target="_blank">
        <FontAwesomeIcon icon={faAt} css={iconStyles} />
      </OutboundLink>
      <OutboundLink href={twitter} target="_blank">
        <FontAwesomeIcon icon={['fab', 'twitter']} css={iconStyles} />
      </OutboundLink>
      <OutboundLink href={instagram} target="_blank">
        <FontAwesomeIcon icon={['fab', 'instagram']} css={iconStyles} />
      </OutboundLink>
      <OutboundLink href={linkedin} target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin']} css={iconStyles} />
      </OutboundLink>
      <OutboundLink href={gitlab} target="_blank">
        <FontAwesomeIcon icon={['fab', 'gitlab']} css={iconStyles} />
      </OutboundLink>
    </Box>
  </div>
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
