/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import PageLayout from '../components/PageLayout';
import Box from '../components/Box';
import RSVP from '../components/RSVP';
import { ShadedH1 } from '../components/Misc';

const Events = () => (
    <PageLayout title="Events" description="The list of events I RSVP to.">
        <Box
            width={[1, 1, 1 / 2]}
            m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
            px={[3, 3, 0]}
        >
            <ShadedH1>Events</ShadedH1>
            <RSVP
                event={{
                    id: 'indie-web-camp-london-2020',
                    name: 'IndieWebCamp London 2020',
                    url: 'https://2020.indieweb.org/london',
                    date: '2020-03-14'
                }}
                value="yes"
            />
            <RSVP
                event={{
                    id: 'homewbrew-website-club-nottingham-april-2020',
                    name:
                        'Homebrew Website Club: Nottingham (Anniversary edition)',
                    url:
                        'https://events.indieweb.org/2020/03/homebrew-website-club-nottingham-anniversary-edition--Rcujt5SykHv1',
                    date: '2020-03-18'
                }}
                value="yes"
            />
        </Box>
    </PageLayout>
);

export default Events;
