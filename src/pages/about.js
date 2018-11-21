/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import { Box } from '../components/Layout';

const imgStyle = css`
  border-radius: 5px;
  margin-bottom: 1.7rem;
  max-width: 400px;
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
