/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { H1 } from '../components/Headers';
import Link from '../components/Link';
import PageLayout from '../components/PageLayout';

const RoundAboutImg = styled(Img)`
    border-radius: 128px;
    border: solid var(--primaryColour) 3px;
`;

const AboutCard = styled.section`
    margin: var(--defaultMargin);
    padding: var(--defaultPadding);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: var(--aboutWrap);

    & p {
        flex-shrink: 100;
        margin-left: var(--aboutTextMargin);
    }
`;

const About = ({ data }) => (
    <PageLayout
        title="About"
        description="A little bit of information abour yours truly."
    >
        <H1>About me</H1>
        <AboutCard>
            <RoundAboutImg fixed={data.aboutImage.childImageSharp.fixed} />
            <p>
                Hey there! My name is Carol, I&apos;m a frontend software
                engineer. I currently work for Capital One, where I&apos;m part
                of the bestest team,{' '}
                <Link href="https://www.youtube.com/watch?v=ukUxx6TvXPY">
                    Aviato
                </Link>
                . I&apos;m also an organiser at{' '}
                <Link href="https://www.technottingham.com/">
                    Tech Nottingham
                </Link>{' '}
                and{' '}
                <Link href="https://www.technottingham.com/wit-notts">
                    Women in Tech
                </Link>
                . In my spare time I like to play videogames, swing dance, bake
                and{' '}
                <Link href="http://www.capoeiranottingham.co.uk/">
                    play capoeira
                </Link>
                . I&apos;m also learning BSL, and how to play the guitar.
            </p>
        </AboutCard>
    </PageLayout>
);

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
    }
`;

export default About;
