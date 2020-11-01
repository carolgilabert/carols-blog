/* eslint-disable no-undef, react/prop-types, react/no-danger */
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { H1 } from '../components/Headers';
import PageLayout from '../components/PageLayout';
import { LinkStyles, LinkHoverStyles } from '../components/Link';
import PostInfo from '../components/PostInfo';

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
            <PostInfo date={post.frontmatter.date} />
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </PageLayout>
    );
};

export const pageQuery = graphql`
    query WeeknotesByPath($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            excerpt(pruneLength: 250)
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                author
            }
        }
    }
`;

export default Template;
