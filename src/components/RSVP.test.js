import React from 'react';
import { shallow } from 'enzyme';
import RSVP from './RSVP';

describe('RSVP component', () => {
    const component = shallow(
        <RSVP
            event={{
                id: 'some-event-id',
                name: 'some event name',
                url: 'some-event-url',
                date: '2020-03-14'
            }}
            value="yes"
        />
    );

    test('should have an article element with the entry class', () => {
        expect(component.type().target).toEqual('article');
        expect(component.prop('className')).toEqual('h-entry');
    });

    test('should have a section with the author and card classes', () => {
        expect(component.find('RSVP__AuthorCard').exists()).toBe(true);
        expect(component.find('RSVP__AuthorCard').prop('className')).toEqual(
            'p-author h-card'
        );
    });

    test('should have a link to my site with the url class within the section', () => {
        expect(component.find('RSVP__AuthorCard a').exists()).toBe(true);
        expect(component.find('RSVP__AuthorCard a').prop('href')).toEqual(
            'https://carolgilabert.me'
        );
        expect(component.find('RSVP__AuthorCard a').prop('className')).toEqual(
            'u-url'
        );
    });

    test('should have a photo of me with the photo class within the link', () => {
        expect(component.find('RSVP__AuthorCard a img').exists()).toBe(true);
        expect(component.find('RSVP__AuthorCard a img').prop('src')).toEqual(
            'https://carolgilabert.me/images/avatar.jpeg'
        );
        expect(
            component.find('RSVP__AuthorCard a img').prop('className')
        ).toEqual('u-photo');
    });

    test('should have a span element with the rsvp class and a value', () => {
        expect(component.find('RSVP__ResponseIcon').exists()).toBe(true);
        expect(component.find('RSVP__ResponseIcon').prop('className')).toEqual(
            'p-rsvp'
        );
        expect(component.find('RSVP__ResponseIcon').prop('value')).toEqual(
            'yes'
        );
    });

    test('should have a header with a link to the event with the reply class', () => {
        expect(
            component.find('RSVP__EventTitle RSVP__EventLink').exists()
        ).toBe(true);
        expect(
            component.find('RSVP__EventTitle RSVP__EventLink').prop('className')
        ).toEqual('u-in-reply-to');
        expect(
            component.find('RSVP__EventTitle RSVP__EventLink').prop('href')
        ).toEqual('some-event-url');
        expect(
            component.find('RSVP__EventTitle RSVP__EventLink').text()
        ).toEqual('some event name');
    });

    test('should have a time tag with the event date', () => {
        expect(component.find('RSVP__Time').exists()).toBe(true);
        expect(component.find('RSVP__Time CalendarIcon').prop('date')).toEqual(
            '2020-03-14'
        );
    });

    test('should have a link with the u-url class and a link to the unique rsvp entry', () => {
        expect(component.find('RSVP__RSVPUrl').prop('className')).toEqual(
            'u-url'
        );
        expect(component.find('RSVP__RSVPUrl').prop('href')).toEqual(
            'https://carolgilabert.me/events#some-event-id'
        );
    });
});
