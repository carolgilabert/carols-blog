module.exports = {
    siteMetadata: {
        title: "Carol's Blog",
        siteUrl: 'https://carolgilabert.me',
        description:
            'A space for me to share my experiences. Some will be technical posts, some will be personal.',
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
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js'
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
            resolve: `gatsby-styled-components-dark-mode`,
            options: {
                light: require(`${__dirname}/src/themes/light.js`),
                dark: require(`${__dirname}/src/themes/dark.js`)
            }
        }
    ]
};
