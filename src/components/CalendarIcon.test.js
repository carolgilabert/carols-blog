import React from 'react';
import { shallow } from 'enzyme';
import CalendarIcon from './CalendarIcon';

describe('CalendarIcon component', () => {
    const component = shallow(<CalendarIcon date="2020-12-31" />);
    test('should have an svg element', () => {
        expect(component.type().target).toEqual('svg');
    });
});
