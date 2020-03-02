/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Box from '../components/Box';
import PageLayout from '../components/PageLayout';
import { ShadedH1 } from '../components/Misc';
import AboutImage from '../images/about_me.jpg';
import Timeline from '../components/Timeline';

const StyledImg = styled(Img)`
    border-radius: 5px;
    margin-bottom: 1.7rem;
    max-width: 400px;
`;

const About = ({ data }) => {
    const { aboutImage, allTimelineJson } = data;
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
                <ShadedH1>About me</ShadedH1>
                <StyledImg
                    alt="Picture of my face"
                    fluid={aboutImage.childImageSharp.fluid}
                />
                <p>
                    This is a picture of my face. I&apos;ll add some more info
                    here soon, but if you&apos;d like to get in touch, just
                    click below :)
                </p>
                <p>
                    Update: I have short hair now, but I&apos;m in essence the
                    same. I&apos;ll update this pic when I get a good one!
                </p>
                <Timeline entries={allTimelineJson.nodes} />
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
