import React from 'react';
import { shallow } from 'enzyme';
import TimelineCard from './TimelineCard';

describe('Timeline Card Component', () => {
    const cardData = {
        year: '2020',
        text: 'it was the year 2020...',
        image: {
            path: 'somewhere',
            alt: 'over the rainbow'
        }
    };

    const component = shallow(<TimelineCard {...cardData} />);

    test('should be an article element', () => {
        expect(component.type()).toEqual('article');
    });
    test('should contain an h2 element', () => {
        expect(component.find('h2').exists()).toEqual(true);
    });
    test('should contain a time element', () => {
        expect(component.find('time').exists()).toEqual(true);
        expect(component.find('time').text()).toEqual('2020');
    });
    test('should contain a p element', () => {
        expect(component.find('p').exists()).toEqual(true);
        expect(component.find('p').text()).toEqual('it was the year 2020...');
    });
    test('should contain an img element', () => {
        expect(component.find('img').exists()).toEqual(true);
        expect(component.find('img').prop('src')).toEqual('somewhere');
        expect(component.find('img').prop('alt')).toEqual('over the rainbow');
    });
});
