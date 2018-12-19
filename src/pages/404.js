import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PageLayout from '../components/PageLayout';
import Box from '../components/Box';
import { Link } from '../components/Misc';
import RobotImage from '../images/robot.png';

const ErrorPage = ({ data }) => {
  const { errorImage } = data;
  return (
    <PageLayout
      title="404"
      description="Whoa! There's nothing here D:"
      image={RobotImage}
    >
      <Box textAlign="center">
        <h1>Whoa!</h1>
        <h3>There&apos;s nothing here</h3>
      </Box>
      <Box m="3.5rem auto" width={[1, 1, 1 / 2]} textAlign="center">
        <Img alt="Robot doodle" fluid={errorImage.childImageSharp.fluid} />
        <p>
          To get back to safety, click&nbsp;
          <Link to="/">here!</Link>
        </p>
      </Box>
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
