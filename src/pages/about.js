/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/PageLayout';
import { ShadedH1 } from '../components/Misc';
import AboutImage from '../images/about_me.jpg';
import Timeline from '../components/Timeline';

const About = ({ data }) => {
    const { allTimelineJson } = data;
    return (
        <PageLayout
            title="About"
            description="A little bit of information abour yours truly."
            image={AboutImage}
        >
            <ShadedH1>About me</ShadedH1>
            <Timeline entries={allTimelineJson.nodes} />
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
