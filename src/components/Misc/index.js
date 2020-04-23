import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Timestamp = styled.time`
    font-size: 0.9rem;
    margin: 0 0 4px;
`;

const UnstyledReadTime = ({ time }) => <span>{`${time} read`}</span>;
UnstyledReadTime.propTypes = { time: PropTypes.string.isRequired };

const ReadTime = styled(UnstyledReadTime)`
    font-size: 0.9em;
    font-style: italic;
`;

export { Timestamp, ReadTime };
