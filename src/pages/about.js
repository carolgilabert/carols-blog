/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { css } from 'react-emotion';
import { Box, Flex } from '../components/Layout';

library.add(fab);

const imgStyle = css`
  border-radius: 5px;
  margin-bottom: 1.7rem;
  max-width: 400px;
`;

const iconStyles = css`
  margin: 0 20px;
`;

const About = ({ data }) => {
  const { imageSharp } = data;
  return (
    <Box>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <h1>About me</h1>
        <Img
          className={imgStyle}
          alt="Picture of my face"
          sizes={imageSharp.sizes}
        />
        <p>
          This is a picture of my face. I&apos;ll add some more info here soon,
          but if you&apos;d like to get in touch, just click below :)
        </p>
      </Box>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <Flex justify="center" wrap={['wrap', 'wrap', 'nowrap']}>
          <OutboundLink href="mailto:carolgilabert@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faAt} className={iconStyles} />
          </OutboundLink>
          <OutboundLink
            href="https://twitter.com/carolgilabert_"
            target="_blank"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} className={iconStyles} />
          </OutboundLink>
          <OutboundLink
            href="https://www.instagram.com/carolgilabert/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              className={iconStyles}
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/in/carolgilabert/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              className={iconStyles}
            />
          </OutboundLink>
          <OutboundLink href="https://gitlab.com/carolgilabert" target="_blank">
            <FontAwesomeIcon icon={['fab', 'gitlab']} className={iconStyles} />
          </OutboundLink>
        </Flex>
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query AboutQuery {
    imageSharp(id: { regex: "/about_me/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default About;
