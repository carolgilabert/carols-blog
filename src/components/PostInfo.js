import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    /* margin-bottom: var(--defaultMargin); */
    margin-bottom: 3rem;
`;

const PostInfo = ({ date, readingTime, author }) => (
    <Container>
        <time>
            <span role="img" aria-label="calendar emoji">
                📅
            </span>
            {` ${date}`}
        </time>
        {readingTime && (
            <time time={readingTime}>
                <span role="img" aria-label="stopwatch emoji">
                    &nbsp;·&nbsp;⏱
                </span>
                {` ${readingTime} read`}
            </time>
        )}
        {author && ` · Written by ${author}`}
    </Container>
);

PostInfo.defaultProps = {
    readingTime: '',
    author: ''
};

PostInfo.propTypes = {
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.string,
    author: PropTypes.string
};

export default PostInfo;
