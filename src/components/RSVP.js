import React from 'react';
import PropTypes from 'prop-types';

const RSVP = ({ event, value }) => (
    <article className="h-entry">
        <section className="p-author h-card">
            <a href="https://carolgilabert.me" className="u-url">
                <img
                    src="https://carolgilabert.me/images/avatar.jpeg"
                    alt="my face"
                    className="u-photo"
                />
                Carolina Gilabert
            </a>
        </section>
        <span className="p-rsvp" value={value} />
        <h2>
            <a className="u-in-reply-to" href={event.url}>
                {event.name}
            </a>
        </h2>
        <time>{event.date}</time>
    </article>
);

RSVP.propTypes = {
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.oneOf(['yes', 'no', 'maybe', 'interested']).isRequired
};

export default RSVP;
