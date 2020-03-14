import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from '../Box';
import AtIcon from '../../images/at.svg';
import TwitterIcon from '../../images/twitter.svg';
import LinkedInIcon from '../../images/linkedin.svg';
import GitHubIcon from '../../images/github.svg';

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

const Footer = ({ name, email, twitter, linkedin, github }) => (
    <StyledFooterWrapper>
        <Box px={[3, 3, 1]} textAlign="center" mt={20}>
            <span>{`Copyright © 2019 ${name}. Say hello 👋 `}</span>
            <a href={email} target="_blank" rel="me noopener noreferrer">
                <AtIcon />
            </a>
            <a href={twitter} target="_blank" rel="me noopener noreferrer">
                <TwitterIcon />
            </a>
            <a href={linkedin} target="_blank" rel="me noopener noreferrer">
                <LinkedInIcon />
            </a>
            <a href={github} target="_blank" rel="me noopener noreferrer">
                <GitHubIcon />
            </a>
        </Box>
    </StyledFooterWrapper>
);

Footer.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    twitter: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string
};

Footer.defaultProps = {
    name: 'Carolina Gilabert',
    email: 'mailto:hello@carolgilabert.me',
    twitter: 'https://twitter.com/CarolSaysThings',
    github: 'https://github.com/carolgilabert',
    linkedin: 'https://www.linkedin.com/in/carolgilabert'
};

export default Footer;
