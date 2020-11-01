const parseFilepath = require('parse-filepath');
const path = require('path');
const slash = require('slash');

/* eslint-disable indent */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    switch (stage) {
        case 'develop':
            actions.setWebpackConfig({
                module: {
                    rules: [
                        {
                            enforce: 'pre',
                            test: /\.(js|jsx)$/,
                            loader: 'eslint-loader',
                            exclude: /node_modules/
                        }
                    ]
                }
            });
            break;
        default:
            break;
    }
};
/* eslint-enable indent */

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        const parsedFilePath = parseFilepath(fileNode.relativePath);

        const slug = `/${parsedFilePath.dir}`;
        createNodeField({ node, name: 'slug', value: slug });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve(
            'src/templates/blog-post-template.js'
        );
        const weeknotesTemplate = path.resolve(
            'src/templates/weeknotes-template.js'
        );
        resolve(
            graphql(
                `
                    {
                        allMarkdownRemark {
                            edges {
                                node {
                                    fields {
                                        slug
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.error) {
                    reject(result.error);
                }

                result.data.allMarkdownRemark.edges.forEach(edge => {
                    if (edge.node.fields.slug.includes('blog')) {
                        createPage({
                            path: `${edge.node.fields.slug}`,
                            component: slash(blogPostTemplate),
                            context: {
                                slug: edge.node.fields.slug
                            }
                        });
                    }

                    if (edge.node.fields.slug.includes('weeknotes')) {
                        createPage({
                            path: `${edge.node.fields.slug}`,
                            component: slash(weeknotesTemplate),
                            context: {
                                slug: edge.node.fields.slug
                            }
                        });
                    }
                });
            })
        );
    });
};
