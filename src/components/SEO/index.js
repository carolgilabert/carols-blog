import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import CoverImage from '../../images/cover.png';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

const SEO = ({ description, lang, meta, keywords, title, image }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription
            },
            {
              property: 'og:title',
              content: title
            },
            {
              property: 'og:description',
              content: metaDescription
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              name: 'twitter:card',
              content: 'summary'
            },
            {
              name: 'twitter:creator',
              content: data.site.siteMetadata.author
            },
            {
              name: 'twitter:title',
              content: title
            },
            {
              name: 'twitter:description',
              content: metaDescription
            }
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                : []
            )
            .concat(
              image
                ? {
                    name: 'og:image',
                    content: `${data.site.siteMetadata.siteUrl}${image}`
                  }
                : []
            )
            .concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
  keywords: [],
  image: CoverImage
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.any),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default SEO;
