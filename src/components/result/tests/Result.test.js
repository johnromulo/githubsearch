import React from 'react';
import Result from '../Result';
import { shallow } from 'enzyme';

it('should mount in a full DOM', function () {
  const wrapper = shallow(<Result />);
  expect(wrapper.find('Logo')).toHaveLength(1);
});
