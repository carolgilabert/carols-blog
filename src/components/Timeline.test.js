import React from 'react';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

describe('Timeline component', () => {
    const timelineData = [
        { year: '1', text: 'text1', image: { path: 'img1', alt: 'alt1' } },
        { year: '2', text: 'text2', image: { path: 'img2', alt: 'alt2' } },
        { year: '3', text: 'text3', image: { path: 'img3', alt: 'alt3' } },
        { year: '4', text: 'text4', image: { path: 'img4', alt: 'alt4' } },
        { year: '5', text: 'text5', image: { path: 'img5', alt: 'alt5' } }
    ];
    const component = shallow(<Timeline entries={timelineData} />);
    test('should contain as many TimelineCard components as there are entries', () => {
        expect(component.find('TimelineCard').length).toEqual(5);
    });

    timelineData.map((timelineItem, index) =>
        /* eslint-disable-next-line jest/valid-describe */
        describe(`TimelineCard #${index}`, () => {
            const timelineCard = component.childAt(index);
            const timelineCardContent = component.childAt(index).shallow();

            test('should have the right year', () => {
                expect(timelineCardContent.find('time').text()).toEqual(
                    timelineItem.year
                );
            });
            test('should have the right text', () => {
                expect(timelineCardContent.find('p').text()).toEqual(
                    timelineItem.text
                );
            });
            test('should have the right img src', () => {
                expect(timelineCardContent.find('img').prop('src')).toEqual(
                    timelineItem.image.path
                );
            });
            test('should have the right img alt', () => {
                expect(timelineCardContent.find('img').prop('alt')).toEqual(
                    timelineItem.image.alt
                );
            });
            test('should have the right key', () => {
                expect(timelineCard.key()).toEqual(timelineItem.year);
            });
        })
    );
});
