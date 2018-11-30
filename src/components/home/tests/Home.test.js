import React from 'react';
import Home from '../Home';
import { shallow, mount } from 'enzyme';
const ReactTestRenderer = require('react-test-renderer');

it('should mount in a full DOM', function () {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('Logo')).toHaveLength(1);
});

it('should mount in a full DOM', function () {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('Search')).toHaveLength(1);
});
