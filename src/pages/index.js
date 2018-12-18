/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Box from '../components/Box';
import PageLayout from '../components/PageLayout';

export default ({ data }) => {
  const { coverImage } = data;
  return (
    <PageLayout title="Home">
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        textAlign="center"
      >
        <h1>Hi! I&apos;m Carol</h1>
        <h3>This is my little home on the internet</h3>
      </Box>
      <Box py={[3, 3, 4]}>
        <Box width={[1, 1, 1 / 2]} m="0 auto" px={[3, 3, 0]}>
          <Img
            alt="Doodle of Carol at her desk"
            fluid={coverImage.childImageSharp.fluid}
          />
          <p>
            It&apos;s very barren for now, but the idea is to get it out there,
            and build on until I&apos;ve used every package on the npm registry
            <span role="img" aria-label="sweat smile emoji">
              &nbsp;😅
            </span>
          </p>
        </Box>
      </Box>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    coverImage: file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
