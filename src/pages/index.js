/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { H1, H2 } from '../components/Headers';
import PageLayout from '../components/PageLayout';
import Drawing from '../images/me.svg';

const StyledDrawing = styled(Drawing)`
    padding-left: var(--homeDrawingPaddingLeft);
    max-width: var(--mainImageSize);
`;

export default () => (
    <PageLayout title="Home">
        <H1>Hey there! I&apos;m Carol.</H1>
        <H2>And this is my little home on the internet</H2>
        <StyledDrawing />
    </PageLayout>
);
