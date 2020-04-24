/* eslint-disable no-undef, react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { LinkStyles } from '../../components/Link';
import PostInfo from '../../components/PostInfo';
import { H1, H2 } from '../../components/Headers';
import PageLayout from '../../components/PageLayout';

const StyledLink = styled(GatsbyLink)`
    ${LinkStyles}
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }
`;

const SearchInput = styled.input`
    margin: 30px auto;
    padding: 10px;
    width: 80%;
    height: 3rem;
    border-radius: 3px;
    border-color: var(--primaryColour);
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
            <H1>Blog</H1>
            <SearchInput
                type="text"
                aria-label="Filter posts"
                placeholder="Filter posts"
                onChange={filterPosts}
            />

            {filteredData.map(({ node: post }) => (
                <StyledLink to={post.fields.slug}>
                    <H2>{post.frontmatter.title}</H2>
                    <PostInfo
                        date={post.frontmatter.date}
                        readingTime={post.frontmatter.readingTime}
                    />
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
