/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Box from '../components/Box';
import PageLayout from '../components/PageLayout';
import { DeskSVG, ShadedH1 } from '../components/Misc';

export default () => (
    <PageLayout title="Home">
        <Box
            width={[1, 1, 1 / 2]}
            m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
            px={[3, 3, 0]}
            textAlign="center"
        >
            <ShadedH1>Hi! I&apos;m Carol</ShadedH1>
            <h3>This is my little home on the internet</h3>
        </Box>
        <Box py={[3, 3, 4]}>
            <Box width={[1, 1, 1 / 2]} m="0 auto" px={[3, 3, 0]}>
                <DeskSVG />
                <p>
                    It&apos;s still kinda basic, but I&apos;ll do my best to add
                    features whenever I can
                    <span role="img" aria-label="smile emoji">
                        &nbsp;🙂
                    </span>
                </p>
            </Box>
        </Box>
    </PageLayout>
);

export const pageQuery = graphql`
    query contentQuery {
        coverImage: file(relativePath: { eq: "cover-short-hair.png" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
