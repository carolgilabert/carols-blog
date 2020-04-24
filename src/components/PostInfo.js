import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: var(--defaultSpacing);
`;

const PostInfo = ({ date, readingTime, author }) => (
    <Container>
        <time>
            <span role="img" aria-label="calendar emoji">
                📅
            </span>
            {` ${date}`}
        </time>
        &nbsp;·&nbsp;
        <time time={readingTime}>
            <span role="img" aria-label="stopwatch emoji">
                ⏱
            </span>
            {` ${readingTime} read`}
        </time>
        {author && ` · Written by ${author}`}
    </Container>
);

PostInfo.defaultProps = {
    author: ''
};

PostInfo.propTypes = {
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.string.isRequired,
    author: PropTypes.string
};

export default PostInfo;
