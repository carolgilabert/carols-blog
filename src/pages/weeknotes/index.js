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

const WeeknotesIndex = ({ data }) => {
    const posts = data.allMarkdownRemark.edges || [];
    return (
        <PageLayout title="Weeknotes">
            <H1>Weeknotes</H1>
            {posts.map(({ node: post }) => (
                <StyledLink to={post.fields.slug}>
                    <H2>{post.frontmatter.title}</H2>
                    <PostInfo date={post.frontmatter.date} />
                    <p>{post.excerpt}</p>
                </StyledLink>
            ))}
        </PageLayout>
    );
};

export const pageQuery = graphql`
    query WeeknotesQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fields: { slug: { glob: "/weeknotes/*" } } }
        ) {
            edges {
                node {
                    html
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
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

export default WeeknotesIndex;
