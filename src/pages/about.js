/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PageLayout from '../components/PageLayout';
import { ShadedH1 } from '../components/Misc';
import Box from '../components/Box';
import Timeline from '../components/Timeline';

const RoundAboutImg = styled(Img)`
    border-radius: 128px;
    border: solid ${({ theme }) => theme.textColour} 3px;
`;

const About = ({ data }) => {
    const { allTimelineJson } = data;

    return (
        <PageLayout
            title="About"
            description="A little bit of information abour yours truly."
        >
            <Box
                width={[1, 1, 1 / 2]}
                m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
                px={[3, 3, 0]}
            >
                <ShadedH1>About me</ShadedH1>
                <RoundAboutImg fixed={data.aboutImage.childImageSharp.fixed} />
                <Timeline entries={allTimelineJson.nodes} />
            </Box>
        </PageLayout>
    );
};

export const pageQuery = graphql`
    query AboutQuery {
        aboutImage: file(relativePath: { eq: "avatar.jpg" }) {
            childImageSharp {
                fixed(
                    width: 256
                    height: 256
                    traceSVG: { color: "#77567a", background: "#e39ec1" }
                ) {
                    ...GatsbyImageSharpFixed_tracedSVG
                }
            }
        }
        allTimelineJson {
            nodes {
                year
                text
                image {
                    alt
                    path
                }
            }
        }
    }
`;

export default About;
