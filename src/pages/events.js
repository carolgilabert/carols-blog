/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { H1 } from '../components/Headers';
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
        <H1>Events</H1>
        <EventContainer className="h-feed">
            {data.allRsvpsJson.nodes.map(({ id, name, url, date, value }) => (
                <RSVP id={id} name={name} url={url} date={date} value={value} />
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
