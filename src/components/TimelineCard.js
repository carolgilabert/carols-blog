import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const Card = styled.article`
    background-color: ${({ theme }) => theme.textColour};
    box-shadow: 5px 5px ${({ theme }) => theme.linkHighlightColour};
    display: flex;
    max-width: 60%;
    border-radius: 5px;
    margin-bottom: 30px;
`;

const YearLabel = styled.h2`
    background-color: ${({ theme }) => theme.linkHighlightColour};
    color: ${({ theme }) => theme.textContrastColour};
    font-size: 2rem;
    text-align: center;
    border-radius: 15px;
    display: inline-block;
    padding: 3px 10px;
    margin: 10px;
`;

const Text = styled.p`
    margin: 10px;
    color: ${({ theme }) => theme.backgroundColour};
    line-height: normal;
    font-size: 0.9rem;
`;

const Picture = styled(Img)`
    margin: 10px;
    width: 12rem;
    height: 12rem;
`;

const TimelineCardImage = ({ imagePath, altText }) => (
    // replace avatar.jpg with actual image
    <StaticQuery
        query={graphql`
            query TimelineCardImageQuery {
                file(relativePath: { eq: "avatar.jpg" }) {
                    childImageSharp {
                        fixed(
                            width: 256
                            height: 256
                            traceSVG: {
                                color: "#77567a"
                                background: "#e39ec1"
                            }
                        ) {
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `}
        render={data => (
            <Picture
                fixed={data.file.childImageSharp.fixed}
                data-path={imagePath}
                alt={altText}
            />
        )}
    />
);
TimelineCardImage.propTypes = {
    imagePath: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};

const TimelineCard = ({ year, text, image }) => (
    <Card>
        <div>
            <YearLabel>
                <time>{year}</time>
            </YearLabel>
            <Text>{text}</Text>
        </div>
        <TimelineCardImage imagePath={image.path} altText={image.alt} />
    </Card>
);

TimelineCard.propTypes = {
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired
};

export default TimelineCard;
