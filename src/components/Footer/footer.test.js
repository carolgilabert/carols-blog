import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';
import enzymeconf from '../../utils/enzyme';

it('has the current year on the footer copyright', () => {
  const tree = shallow(<Footer />);
  const currentYear = new Date().getFullYear().toString();
  expect(tree.text()).toEqual(expect.stringContaining(currentYear));
});
