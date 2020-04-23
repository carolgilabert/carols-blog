import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Link from '../components/Link';
import PageLayout from '../components/PageLayout';
import RobotImage from '../images/robot.png';

const ErrorPage = ({ data }) => {
    const { errorImage } = data;
    return (
        <PageLayout
            title="404"
            description="Whoa! There's nothing here D:"
            image={RobotImage}
        >
            <h1>Whoa!</h1>
            <h3>There&apos;s nothing here</h3>

            <Img alt="Robot doodle" fluid={errorImage.childImageSharp.fluid} />
            <p>
                To get back to safety, click&nbsp;
                <Link to="/">here!</Link>
            </p>
        </PageLayout>
    );
};

ErrorPage.propTypes = {
    data: PropTypes.shape({
        errorImage: PropTypes.object
    }).isRequired
};

export const pageQuery = graphql`
    query ErrorQuery {
        errorImage: file(relativePath: { eq: "robot.png" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default ErrorPage;
