import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import NavLink from './NavLink';

describe('Navigation Bar', () => {
    const component = shallow(<Navigation />);

    test('should contain a nav element', () => {
        expect(component.type().target).toEqual('nav');
    });

    test('should contain 3 elements inside the nav', () => {
        expect(component.children()).toHaveLength(3);
    });

    test('should only contain NavLink elements', () => {
        component
            .children()
            .map(child => expect(child.type()).toEqual(NavLink));
    });
});
