module.exports = {
    siteMetadata: {
        title: "Carol's Blog",
        siteUrl: 'https://carolgilabert.me',
        description: 'This is my little home on the internet.',
        author: 'Carolina Gilabert'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-external-links`,
                        options: {
                            target: '_blank'
                        }
                    }
                ]
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-transformer-json',
        'gatsby-plugin-sharp',
        'gatsby-plugin-twitter',
        'gatsby-plugin-feed',
        'gatsby-plugin-catch-links',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Carol's Blog`,
                short_name: `Carol's Blog`,
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/favicon.svg',
                legacy: true
            }
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /^.*\.svg$/
                }
            }
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-fathom`,
            options: {
                siteId: 'RVIPAHXX',
                whitelistHostnames: ['carolgilabert.me']
            }
        },
        {
            resolve: `gatsby-plugin-webmention`,
            options: {
                username: 'carolgilabert.me',
                identity: {
                    github: 'carolgilabert',
                    twitter: 'CarolSaysThings'
                },
                mentions: true,
                pingbacks: true,
                domain: 'carolgilabert.me',
                token: process.env.WEBMENTIONS_TOKEN
            }
        }
    ]
};
