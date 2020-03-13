/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import { ShadedH1 } from '../components/Misc';
import Box from '../components/Box';
import Timeline from '../components/Timeline';

const RoundAboutImg = styled(Img)`
    border-radius: 128px;
    border: solid ${({ theme }) => theme.textColour} 3px;
    float: right;
    margin: 10px;
`;

const AboutCard = styled.section`
    max-width: 760px;
    margin-bottom: 50px;
`;

const About = ({ data }) => {
    const { allTimelineJson } = data;

    return (
        <PageLayout
            title="About"
            description="A little bit of information abour yours truly."
        >
            <Box
                width={[1, 1, 3 / 4]}
                m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
                px={[3, 3, 0]}
            >
                <ShadedH1>About me</ShadedH1>
                <AboutCard>
                    <RoundAboutImg
                        fixed={data.aboutImage.childImageSharp.fixed}
                    />
                    Hey there! My name is Carol, I&apos;m a frontend software
                    engineer. I currently work for Capital One, where I&apos;m
                    part of the bestest team, Aviato. I&apos;m also an organiser
                    at Tech Nottingham, Women in Tech and NottsJS. In my spare
                    time I like to play videogames, swing dance, bake and play
                    capoeira. I&apos;m also learning BSL, and how to play the
                    guitar. You can scroll along for a whistle stop tour of my
                    life so far:
                </AboutCard>
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
