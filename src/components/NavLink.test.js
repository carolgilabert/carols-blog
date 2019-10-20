import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

describe('NavLink Tests', () => {
    const component = shallow(<NavLink to="/ohai">Ohai</NavLink>);

    test('should contain a GatsbyLink element', () => {
        expect(component.exists()).toBe(true);
    });

    test('should wrap the content passed into it', () => {
        expect(component.children().text()).toEqual('Ohai');
    });
});
