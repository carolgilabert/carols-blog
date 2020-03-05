import React from 'react';
import { shallow } from 'enzyme';
import RSVP from './RSVP';

describe('RSVP component', () => {
    const component = shallow(<RSVP />);

    test('should have an article element with the h-entry class', () => {
        expect(component.type()).toEqual('article');
        expect(component.prop('className')).toEqual('h-entry');
    });
});
