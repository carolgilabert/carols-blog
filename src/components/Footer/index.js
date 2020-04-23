import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AtIcon from '../../images/at.svg';
import GitHubIcon from '../../images/github.svg';
import LinkedInIcon from '../../images/linkedin.svg';
import TwitterIcon from '../../images/twitter.svg';

const StyledFooterWrapper = styled.div`
    margin: 20px 0px;
    border-top: 2px var(--primaryColour) dashed;

    & a {
        box-shadow: none;
        color: currentColor;
    }

    & a:hover {
        color: var(--accentColour);
    }
`;

const Footer = ({ name, email, twitter, linkedin, github }) => (
    <StyledFooterWrapper>
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
