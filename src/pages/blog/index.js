/* eslint-disable no-undef, react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Link, ReadTime, Timestamp } from '../../components/Misc';
import { H1, H2 } from '../../components/Headers';
import PageLayout from '../../components/PageLayout';

const StyledLink = styled(Link)`
    box-shadow: none;

    &:hover {
        box-shadow: none;
        color: ${({ theme }) => theme.accentColour};
    }
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
            <H1>Blog</H1>
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
                    <H2>{post.frontmatter.title}</H2>
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
