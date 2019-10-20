/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Box from '../components/Box';
import { Timestamp, ReadTime, ShadedH1 } from '../components/Misc';
import PageLayout from '../components/PageLayout';

const PostContent = styled.div`
    & a {
        text-decoration: none;
        color: inherit;
        box-shadow: inset 0 -5px 0 ${({ theme }) => theme.linkHighlightColour};
        -webkit-transition: box-shadow 0.4s ease-in-out, color 0.4s;
        transition: box-shadow 0.4s ease-in-out, color 0.4s;
        padding: 3px;
    }

    & a:hover {
        box-shadow: inset 0 -300px 0 ${({ theme }) => theme.linkHighlightColour};
        cursor: pointer;
        color: ${({ theme }) => theme.textContrastColour};
    }
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
                <ShadedH1>{post.frontmatter.title}</ShadedH1>
                <Timestamp>{post.frontmatter.date}</Timestamp>
                {' · '}
                <ReadTime time={post.frontmatter.readingTime} />
                <h5>
                    Written by&nbsp;
                    {post.frontmatter.author}
                </h5>
                <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
