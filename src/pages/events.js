/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ShadedH1 } from '../components/Misc';
import PageLayout from '../components/PageLayout';
import RSVP from '../components/RSVP';

const EventContainer = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr 5rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`;

const Events = ({ data }) => (
    <PageLayout title="Events" description="The list of events I RSVP to.">
        <ShadedH1>Events</ShadedH1>
        <EventContainer className="h-feed">
            {data.allRsvpsJson.nodes.map(event => (
                <RSVP {...event} />
            ))}
        </EventContainer>
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
