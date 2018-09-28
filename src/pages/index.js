/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Box } from '../components/Layout';

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <div>
      <Box>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          align="center"
        >
          <h1>{myData.title}</h1>
          <h3>{myData.subtitle}</h3>
        </Box>
      </Box>
      <Box py={[3, 3, 4]}>
        <Box width={[1, 1, 1 / 2]} m="0 auto" px={[3, 3, 0]}>
          <p>
            It&apos;s very barren for now, but the idea is to get it out there,
            and build on until I&apos;ve used every package on the npm registry
            <span role="img" aria-label="sweat smile emoji">
              &nbsp;😅
            </span>
          </p>
        </Box>
      </Box>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
