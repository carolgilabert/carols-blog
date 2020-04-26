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
        {entries.map(({ year, text, image }) => (
            <TimelineCard key={year} year={year} text={text} image={image} />
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
