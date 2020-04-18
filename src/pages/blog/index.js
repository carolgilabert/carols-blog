/* eslint-disable no-undef, react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Link, ReadTime, ShadedH1, Timestamp } from '../../components/Misc';
import PageLayout from '../../components/PageLayout';

const StyledLink = styled(Link)`
    box-shadow: none;

    &:hover {
        box-shadow: none;
        color: ${({ theme }) => theme.accentColour};
    }
`;

const PostTitle = styled.h2`
    color: ${({ theme }) => theme.highContrastColour};
`;

const SearchInput = styled.input`
    margin: 30px auto;
    padding: 10px;
    width: 80%;
    height: 3rem;
    border-radius: 3px;
    border-color: ${({ theme }) => theme.primaryColour};
    border-width: 3px;
`;

const BlogIndex = ({ data }) => {
    const posts = data.allMarkdownRemark.edges || [];
    const [state, setState] = React.useState({
        filteredData: posts,
        query: ''
    });
    const filterPosts = event => {
        const query = event.target.value.toLowerCase();
        let filteredData = posts;

        if (query) {
            filteredData = posts.filter(
                post =>
                    post.node.frontmatter.title.toLowerCase().includes(query) ||
                    post.node.html.toLowerCase().includes(query)
            );
        }
        setState({
            query,
            filteredData
        });
    };
    const { filteredData } = state;
    return (
        <PageLayout title="Blog">
            <ShadedH1>Blog</ShadedH1>
            <SearchInput
                type="text"
                aria-label="Filter posts"
                placeholder="Filter posts"
                onChange={filterPosts}
            />

            {filteredData.map(({ node: post }) => (
                <StyledLink to={post.fields.slug}>
                    <Timestamp>{post.frontmatter.date}</Timestamp>
                    &nbsp;·&nbsp;
                    <ReadTime time={post.frontmatter.readingTime} />
                    <PostTitle>{post.frontmatter.title}</PostTitle>
                    <p>{post.excerpt}</p>
                </StyledLink>
            ))}
        </PageLayout>
    );
};

export const pageQuery = graphql`
    query BlogQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    html
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        readingTime
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
/* eslint-enable */

export default BlogIndex;
