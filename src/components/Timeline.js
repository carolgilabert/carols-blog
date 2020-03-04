import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TimelineCard from './TimelineCard';

const TimelineContainer = styled.div`
    padding-left: 30px;
    border-left: 0.4rem solid ${({ theme }) => theme.textColour};
`;

const Timeline = ({ entries }) => (
    <TimelineContainer>
        {entries.map(entry => (
            <TimelineCard key={entry.year} {...entry} />
        ))}
    </TimelineContainer>
);

Timeline.defaultProps = {
    entries: []
};

Timeline.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object)
};

export default Timeline;
