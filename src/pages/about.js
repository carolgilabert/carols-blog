/* eslint-disable no-undef, react/prop-types */
/** @jsx jsx */
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { jsx, css } from '@emotion/core';
import Box from '../components/Box';
import PageLayout from '../components/PageLayout';
import AboutImage from '../images/about_me.jpg';

const imgStyle = css`
  border-radius: 5px;
  margin-bottom: 1.7rem;
  max-width: 400px;
`;

const About = ({ data }) => {
  const { aboutImage } = data;
  return (
    <PageLayout
      title="About"
      description="A little bit of information abour yours truly."
      image={AboutImage}
    >
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <h1>About me</h1>
        <Img
          css={imgStyle}
          alt="Picture of my face"
          fluid={aboutImage.childImageSharp.fluid}
        />
        <p>
          This is a picture of my face. I&apos;ll add some more info here soon,
          but if you&apos;d like to get in touch, just click below :)
        </p>
      </Box>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query AboutQuery {
    aboutImage: file(relativePath: { eq: "about_me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
