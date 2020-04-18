/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { ShadedH1 } from '../components/Misc';
import PageLayout from '../components/PageLayout';
import Drawing from '../images/me.svg';

export default () => (
    <PageLayout title="Home">
        <ShadedH1>Hi! I&apos;m Carol</ShadedH1>
        <h3>This is my little home on the internet</h3>

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
