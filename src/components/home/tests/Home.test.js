import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';

describe('Home tests', () => {
  test('render Logo', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Logo')).toHaveLength(1);

    const logo = wrapper.find('Logo').dive();
    expect(logo.text()).toBe('GithubSearch');
  });

  test('render Search', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Search')).toHaveLength(1);

    const search = wrapper.find('Search').dive();
    search.find('#inputUserName').simulate('change', { target: { id: 'inputUserName', value: 'john' } })
    expect(wrapper.state('userName')).toEqual('john');
  });
});

