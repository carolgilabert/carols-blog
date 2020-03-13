import React from 'react';
import { shallow } from 'enzyme';
import CalendarIcon, { getMonthString, getDay, getMonth } from './CalendarIcon';

describe('CalendarIcon component', () => {
    const component = shallow(<CalendarIcon date="2020-12-31" />);
    test('should have an svg element', () => {
        expect(component.type().target).toEqual('svg');
    });
});

describe('getMonthString function', () => {
    test('should return the right string for the right month index', () => {
        expect(getMonthString(1)).toEqual('jan');
        expect(getMonthString(5)).toEqual('may');
        expect(getMonthString(9)).toEqual('sep');
        expect(getMonthString(11)).toEqual('nov');
    });
});

describe('getDay', () => {
    test('should return the number day from a date string', () => {
        expect(getDay('2020-04-14')).toEqual('14');
        expect(getDay('2020-05-03')).toEqual('03');
    });
});

describe('getMonth', () => {
    test('should return the months first 3 letters from a date string', () => {
        expect(getMonth('2020-04-14')).toEqual('apr');
        expect(getMonth('2020-05-03')).toEqual('may');
    });
});
