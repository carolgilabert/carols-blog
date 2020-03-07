import React from 'react';
import { shallow } from 'enzyme';
import RSVP from './RSVP';

describe('RSVP component', () => {
    const component = shallow(
        <RSVP
            event={{
                name: 'some event name',
                url: 'some-event-url',
                date: '2020-03-14'
            }}
            value="yes"
        />
    );

    test('should have an article element with the entry class', () => {
        expect(component.type()).toEqual('article');
        expect(component.prop('className')).toEqual('h-entry');
    });

    test('should have a section with the author and card classes', () => {
        expect(component.find('section').exists()).toBe(true);
        expect(component.find('section').prop('className')).toEqual(
            'p-author h-card'
        );
    });

    test('should have a link to my site with the url class within the section', () => {
        expect(component.find('section a').exists()).toBe(true);
        expect(component.find('section a').prop('href')).toEqual(
            'https://carolgilabert.me'
        );
        expect(component.find('section a').prop('className')).toEqual('u-url');
    });

    test('should have a photo of me with the photo class within the link', () => {
        expect(component.find('section a img').exists()).toBe(true);
        expect(component.find('section a img').prop('src')).toEqual(
            'https://carolgilabert.me/images/avatar.jpeg'
        );
        expect(component.find('section a img').prop('className')).toEqual(
            'u-photo'
        );
    });

    test('should have a span element with the rsvp class and a value', () => {
        expect(component.find('span').exists()).toBe(true);
        expect(component.find('span').prop('className')).toEqual('p-rsvp');
        expect(component.find('span').prop('value')).toEqual('yes');
    });

    test('should have a header with a link to the event with the reply class', () => {
        expect(component.find('h2 a').exists()).toBe(true);
        expect(component.find('h2 a').prop('className')).toEqual(
            'u-in-reply-to'
        );
        expect(component.find('h2 a').prop('href')).toEqual('some-event-url');
        expect(component.find('h2 a').text()).toEqual('some event name');
    });

    test('should have a time tag with the event date', () => {
        expect(component.find('time').exists()).toBe(true);
        expect(component.find('time').text()).toEqual('2020-03-14');
    });
});
