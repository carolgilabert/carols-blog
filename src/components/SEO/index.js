import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CoverImage from '../../images/me.svg';

const SEO = ({ description, lang, meta, title }) => {
    const metaDescription =
        description || 'This is my little home on the internet.';
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${"Carol's Blog"}`}
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
                    content: 'Carolina Gilabert'
                },
                {
                    name: 'twitter:title',
                    content: title
                },
                {
                    name: 'twitter:description',
                    content: metaDescription
                },
                {
                    name: 'keywords',
                    content: ['gatsby', 'application', 'react', 'blog']
                },
                {
                    name: 'og:image',
                    content: `https://carolgilabert.me${CoverImage}`
                }
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = {
    description: '',
    lang: 'en',
    meta: []
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.any),
    title: PropTypes.string.isRequired
};

export default SEO;
