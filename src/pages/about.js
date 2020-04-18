/* eslint-disable no-undef, react/prop-types */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { H1 } from '../components/Headers';
import PageLayout from '../components/PageLayout';
import AboutImage from '../images/about_me.jpg';

const StyledImg = styled(Img)`
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
            <H1>About me</H1>
            <StyledImg
                alt="Picture of my face"
                fluid={aboutImage.childImageSharp.fluid}
            />
            <p>
                This is a picture of my face. I&apos;ll add some more info here
                soon, but if you&apos;d like to get in touch, just click below
                :)
            </p>
            <p>
                Update: I have short hair now, but I&apos;m in essence the same.
                I&apos;ll update this pic when I get a good one!
            </p>
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
