/* eslint-disable no-undef, react/prop-types, react/no-danger */
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { ReadTime, Timestamp } from '../components/Misc';
import { H1 } from '../components/Headers';
import PageLayout from '../components/PageLayout';
import { LinkStyles, LinkHoverStyles } from '../components/Link';

const PostContent = styled.div`
    & a {
        ${LinkStyles}
    }

    & a:hover {
        ${LinkHoverStyles}
    }
`;

const Template = ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <PageLayout title={post.frontmatter.title} description={post.excerpt}>
            <H1>{post.frontmatter.title}</H1>
            <Timestamp>{post.frontmatter.date}</Timestamp>
            &nbsp;·&nbsp;
            <ReadTime time={post.frontmatter.readingTime} />
            <h5>
                Written by&nbsp;
                {post.frontmatter.author}
            </h5>
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
