/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Link, Timestamp, ReadTime, ShadedH1 } from '../../components/Misc';
import Box from '../../components/Box';
import PageLayout from '../../components/PageLayout';

const StyledLink = styled(Link)`
    box-shadow: none;

    &:hover {
        box-shadow: none;
        color: ${({ theme }) => theme.linkHighlightColour};
    }
`;

const PostTitle = styled.h2`
    color: ${({ theme }) => theme.textContrastColour};
`;

const SearchInput = styled.input`
    margin: 30px auto;
    padding: 10px;
    width: 80%;
    height: 3rem;
    border-radius: 3px;
    border-color: ${({ theme }) => theme.textColour};
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
            <Box
                width={[1, 1, 720]}
                m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
                px={[3, 3, 0]}
            >
                <ShadedH1>Blog</ShadedH1>
                <SearchInput
                    type="text"
                    aria-label="Filter posts"
                    placeholder="Filter posts"
                    onChange={filterPosts}
                />
                <Box>
                    {filteredData.map(({ node: post }) => (
                        <Box key={post.id}>
                            <StyledLink to={post.fields.slug}>
                                <Timestamp>{post.frontmatter.date}</Timestamp>
                                &nbsp;·&nbsp;
                                <ReadTime time={post.frontmatter.readingTime} />
                                <PostTitle>{post.frontmatter.title}</PostTitle>
                                <p>{post.excerpt}</p>
                            </StyledLink>
                        </Box>
                    ))}
                </Box>
            </Box>
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
