import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarIcon from './CalendarIcon';

const RSVPContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AuthorCard = styled.section`
    display: none;
`;

const ResponseIcon = styled.data`
    margin: 10px;
`;

const EventTitle = styled.h2`
    margin: 10px;
    font-size: 1.5rem;
`;

const EventLink = styled.a`
    color: ${({ theme }) => theme.textContrastColour};
`;

const Time = styled.time`
    margin: 10px;
`;

const getResponseEmoji = (response = 'yes') => {
    const emojiMapping = {
        yes: '✅',
        no: '⛔️',
        maybe: '🤔',
        interested: '👀'
    };

    return emojiMapping[response];
};

const RSVP = ({ event, value }) => (
    <RSVPContainer className="h-entry" id={event.id}>
        <AuthorCard className="p-author h-card">
            <a href="https://carolgilabert.me" className="u-url">
                <img
                    src="https://carolgilabert.me/images/avatar.jpg"
                    alt="my face"
                    className="u-photo"
                />
                <span className="p-name">Carolina Gilabert</span>
            </a>
        </AuthorCard>
        <ResponseIcon className="p-rsvp" value={value}>
            {getResponseEmoji(value)}
        </ResponseIcon>
        <EventTitle>
            <EventLink
                className="u-in-reply-to"
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {event.name}
            </EventLink>
        </EventTitle>
        <Time datetime={event.date}>
            <CalendarIcon date={event.date} />
        </Time>
    </RSVPContainer>
);

RSVP.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.oneOf(['yes', 'no', 'maybe', 'interested']).isRequired
};

export default RSVP;
