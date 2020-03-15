/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Box from '../components/Box';
import RSVP from '../components/RSVP';
import { ShadedH1 } from '../components/Misc';

const EventContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Events = ({ data }) => (
    <PageLayout title="Events" description="The list of events I RSVP to.">
        <Box
            width={[1, 1, 1 / 2]}
            m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
            px={[3, 3, 0]}
        >
            <ShadedH1>Events</ShadedH1>
            <EventContainer>
                {data.allRsvpsJson.nodes.map(event => (
                    <RSVP {...event} />
                ))}
            </EventContainer>
        </Box>
    </PageLayout>
);

export const pageQuery = graphql`
    query EventsQuery {
        allRsvpsJson(sort: { fields: date, order: DESC }) {
            nodes {
                name
                url
                value
                date
                id
            }
        }
    }
`;

export default Events;
