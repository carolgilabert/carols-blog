/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Box from '../components/Box';
import { Timestamp, Link, ReadTime } from '../components/Misc';
import PageLayout from '../components/PageLayout';

const Back = styled.div`
  color: #666;
  float: right;
  position: relative;
  bottom: 1.5rem;
`;

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <PageLayout title={post.frontmatter.title} description={post.excerpt}>
      <Box
        width={[1, 1, 720]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        style={{ overflow: 'visible' }}
      >
        <Back>
          <Link to="/blog">&larr; Blog</Link>
        </Back>
        <h1>{post.frontmatter.title}</h1>
        <Timestamp>{post.frontmatter.date}</Timestamp>
        {' · '}
        <ReadTime time={post.frontmatter.readingTime} />
        <h5>
          Written by&nbsp;
          {post.frontmatter.author}
        </h5>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        readingTime
      }
    }
  }
`;

export default Template;
