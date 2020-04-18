/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { H1, H2 } from '../components/Headers';
import PageLayout from '../components/PageLayout';
import Drawing from '../images/me.svg';

export default () => (
    <PageLayout title="Home">
        <H1>Hi! I&apos;m Carol</H1>
        <H2>This is my little home on the internet</H2>

        <Drawing />
        <p>
            It&apos;s still kinda basic, but I&apos;ll do my best to add
            features whenever I can
            <span role="img" aria-label="smile emoji">
                &nbsp;🙂
            </span>
        </p>
    </PageLayout>
);
