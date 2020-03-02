import React from 'react';
import PropTypes from 'prop-types';

const TimelineCard = ({ year, text, image }) => (
    <article>
        <h2>
            <time>{year}</time>
        </h2>
        <p>{text}</p>
        <img src={image.path} alt={image.alt} />
    </article>
);

TimelineCard.propTypes = {
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired
};

export default TimelineCard;
