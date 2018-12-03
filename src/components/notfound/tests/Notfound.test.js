import React from 'react';
import Notfound from '../Notfound';
import { shallow } from 'enzyme';

describe('Notfound tests', () => {
  test('render text', () => {
    const wrapper = shallow(<Notfound text="Not found" />);

    const textNotfound = wrapper.find('#textNotfound');
    expect(textNotfound.text()).toBe('Not found');
  });
});
