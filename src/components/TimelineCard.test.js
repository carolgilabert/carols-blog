import React from 'react';
import { shallow } from 'enzyme';
import TimelineCard from './TimelineCard';

describe('Timeline Card Component', () => {
    const component = shallow(<TimelineCard />);

    test('should be an article element', () => {
        expect(component.type()).toEqual('article');
    });
    test('should contain an h2 element', () => {
        expect(component.find('h2').exists()).toEqual(true);
    });
    test('should contain a time element', () => {
        expect(component.find('time').exists()).toEqual(true);
    });
    test('should contain a p element', () => {
        expect(component.find('p').exists()).toEqual(true);
    });
    test('should contain an img element', () => {
        expect(component.find('img').exists()).toEqual(true);
    });
});
