import React from 'react';
import PropTypes from 'prop-types';
import TimelineCard from './TimelineCard';

const Timeline = ({ entries }) => (
    <>
        {entries.map(entry => (
            <TimelineCard key={entry.year} {...entry} />
        ))}
    </>
);

Timeline.defaultProps = {
    entries: []
};

Timeline.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object)
};

export default Timeline;
