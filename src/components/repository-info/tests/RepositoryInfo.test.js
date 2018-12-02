import React from 'react';
import RepositoryInfo from '../RepositoryInfo';
import { shallow } from 'enzyme';

describe('RepositoryInfo tests', () => {
  test('render object full', () => {

    const repo = {
      name:'Repo1',
      descripition:'desc1',
      stargazers_count: 2,
    }

    const wrapper = shallow(<RepositoryInfo repository={repo} />);
    expect(wrapper.find('#title')).toHaveLength(1);

    expect(wrapper.find('#title').text()).toBe('Repo1');

    expect(wrapper.find('#description')).toHaveLength(1);

    expect(wrapper.find('#description').text()).toBe('desc1');

    expect(wrapper.find('#starcount')).toHaveLength(1);

    expect(wrapper.find('#starcount').text()).toBe('2');

  });

  test('render object not descripition and stargazers_count', () => {

    const repo = {
      name:'Repo1',
      descripition: null,
      stargazers_count: 0,
    }

    const wrapper = shallow(<RepositoryInfo repository={repo} />);
    expect(wrapper.find('#title')).toHaveLength(1);

    expect(wrapper.find('#title').text()).toBe('Repo1');

    expect(wrapper.find('#description')).toHaveLength(1);

    expect(wrapper.find('#description').text()).toBe('No descripton');

    expect(wrapper.find('#starcount')).toHaveLength(1);

    expect(wrapper.find('#starcount').text()).toBe('0');

  });

});
