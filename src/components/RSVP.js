import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarIcon from './CalendarIcon';

const getResponseEmoji = (response = 'yes') => {
    const emojiMapping = {
        yes: '✅',
        no: '⛔️',
        maybe: '🤔',
        interested: '👀'
    };

    return emojiMapping[response];
};

const EventLink = styled.a`
    color: ${({ theme }) => theme.highContrastColour};
    font-size: 1.7rem;
    line-height: 1.7rem;
`;

const Response = styled.data`
    font-size: 2rem;
`;

const RSVP = ({ id, name, url, date, value }) => (
    <article className="h-entry" id={id} style={{ display: 'contents' }}>
        <a
            style={{ display: 'none' }}
            className="u-url"
            href={`https://carolgilabert.me/events#${id}`}
        >
            <span role="img" aria-label="chainlink emoji">
                🔗
            </span>
        </a>
        <section className="p-author h-card" style={{ display: 'none' }}>
            <a href="https://carolgilabert.me" className="u-url">
                <img
                    src="https://carolgilabert.me/images/avatar.jpeg"
                    alt="my face"
                    className="u-photo"
                />
                <span className="p-name">Carolina Gilabert</span>
            </a>
        </section>
        <Response className="p-rsvp" value={value}>
            {getResponseEmoji(value)}
        </Response>
        <h2>
            <EventLink
                className="u-in-reply-to"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {name}
            </EventLink>
        </h2>
        <time dateTime={date}>
            <CalendarIcon date={date} />
        </time>
    </article>
);

RSVP.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.oneOf(['yes', 'no', 'maybe', 'interested']).isRequired
};

export default RSVP;
